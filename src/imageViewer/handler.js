import { makeArray, view, rAFThrottle, toFixed } from '../utils/shared'
import animate from '../utils/animate'
import { getPoints, getTouchCenter, getScale, originZoom } from './helpers'

export default class Handler {
  constructor(options) {
    this.upTime = 0
    this.downTime = 0
    this.hideScale = 0.8
    this.options = options
    this.last = {
      move: { x: 0, y: 0 },
      dif: { x: 0, y: 0, time: 0 },
      centerPoint: { x: 0, y: 0 }
    }
    this.position = {
      isLeft: true,
      isRight: true,
      isTop: true,
      isBottom: true
    }
    this.move = rAFThrottle(this.move)
  }
  start(event) {
    event.preventDefault()

    const touches = getPoints(event)

    this.inAnimation && this.animation.stop()
    this.moved = false
    this.downTime = Date.now()
    this.last.dif = { x: 0, y: 0, time: 0 }

    clearTimeout(this.clickTimer)

    if (touches.length === 2) {
      this.pinchstart(event)
    } else if (touches.length === 1) {
      this.dragstart(event)
    }
  }

  move(event) {
    event.cancelable && event.preventDefault()

    const touches = getPoints(event)

    this.moved = true

    if (touches.length === 2) {
      this.pinchmove(event)
    } else if (touches.length === 1) {
      this.dragmove(event)
    }
  }

  up(event) {
    const touches = event.touches || []
    const time = Date.now()

    if (!this.moved) {
      const dobuleclickTime = 300
      const clickTime = 500
      // 模拟双击事件
      if (time - this.upTime <= dobuleclickTime) {
        this.options.dobuleClick(this.last.move)
        this.position = this.checkPosition(this.options.getCurrentStyle().style)
      } else if (time - this.downTime <= clickTime) {
        // 单击事件
        this.clickTimer = setTimeout(this.options.click, dobuleclickTime)
      }
    }

    this.upTime = time

    if (touches.length) {
      // pinch end
      this.dragstart(event)
    } else {
      // drag end
      this.dragend(event)
    }
  }

  dragstart(event) {
    const touches = getPoints(event)

    this.disabled = false
    this.isHide = false
    this.isSlideDown = false
    this.startScale = undefined
    this.last.move = {
      x: touches[0].clientX,
      y: touches[0].clientY
    }
    this.timeStamp = event.timeStamp
    this.touchDelay = 2
  }

  dragmove(event) {
    if (this.isHide) return

    const touches = getPoints(event)
    const move = {
      x: touches[0].clientX,
      y: touches[0].clientY
    }

    let x = move.x - this.last.move.x
    let y = move.y - this.last.move.y

    if (x === 0 && y === 0) return

    this.isHorizontal = Math.abs(x) >= Math.abs(y)

    // 水平滑动
    if (this.isHorizontal) {
      const style = this.options.getCurrentStyle().style

      // 根据 position 判断是否需要切换上一张/下一张
      this.position = this.checkPosition({
        x: style.x + x,
        y: style.y + y,
        scale: style.scale,
        width: style.width,
        height: style.height
      })

      // 左滑
      if (x < 0) {
        // 切换下一张的条件判断，符合则标记 disabled 状态
        if (this.position.isRight && !this.isSlideDown) {
          this.disabled = true
        }
      } else {
        // 右滑
        // 切换上一张的条件判断，符合则标记 disabled 状态
        if (this.position.isLeft && !this.isSlideDown) {
          this.disabled = true
        }
      }
    } else {
      // 垂直滑动：根据 position 判断是否需要缩小并隐藏
      if (
        (!this.position.isBottom && this.position.isTop) ||
        (this.position.isBottom && this.position.isTop)
      ) {
        const style = this.options.getCurrentStyle().style
        const scaleChanged = 1 - y / move.y
        let newScale = style.scale * scaleChanged

        if (this.startScale === undefined) {
          this.startScale = style.scale
          this.overlayOpcity = 1
        }

        this.overlayOpcity *= scaleChanged

        // 上滑
        if (y < 0) {
          if (newScale >= this.startScale) {
            newScale = this.startScale
            this.overlayOpcity = 1
          }
        } else {
          // 下滑
        }

        this.options.scaleTo(move, newScale, false, false)
        this.options.updateOverlayOpcity(this.overlayOpcity)
      }

      this.isSlideDown = true
    }

    this.last.dif = {
      x,
      y,
      time: event.timeStamp - this.timeStamp
    }
    this.timeStamp = event.timeStamp
    this.last.move = move

    // 延迟防止第一次拖拽抖动
    if (this.touchDelay) {
      this.touchDelay--
      return
    }

    const style = this.options.getCurrentStyle().style
    this.options.setStyle({ x: style.x + x, y: style.y + y, duration: 0 })
  }

  // 主要校验图片位置、大小是否合法，不合法则重置位置
  dragend() {
    if (!this.moved) return

    const style = this.options.getCurrentStyle().style

    this.isHide = style.scale / this.startScale <= this.hideScale

    if (this.isHide) {
      return this.options.hide()
    } else if (this.isSlideDown) {
      this.options.updateOverlayOpcity(1)
    }

    // 是否快速滑动，是的话则返回滑动相关数据
    const result = this._isFastMove()

    if (result) {
      let x = style.x + result.x
      let y = style.y + result.y
      let scale = style.scale
      let type = 'easeOutCubic'
      const position = this.validation({
        x,
        y,
        scale,
        width: style.width,
        height: style.height
      })

      if (position.isDraw) {
        x = position.x
        y = position.y
        scale = position.scale

        // 根据滑动的方向和 position 数据判断是否需要回弹效果
        if (
          ((position.isBottom || position.isTop) && !this.isHorizontal) ||
          ((position.isLeft || position.isRight) && this.isHorizontal)
        ) {
          type = 'easeOutBack'
        }
      }

      // 缓冲动画
      this.animate(x, y, scale, { type, time: result.time })
      this.position = position
    } else {
      this.position = this.validation(null, true)
    }
  }

  pinchstart(event) {
    const zoom = makeArray(getPoints(event)).map(touch => {
      return { x: touch.clientX, y: touch.clientY }
    })
    this.last.zoom = zoom
    this.last.centerPoint = getTouchCenter(zoom)
    this.touchDelay = 5
  }

  pinchmove(event) {
    const that = this
    const zoom = makeArray(getPoints(event)).map(touch => {
      return { x: touch.clientX, y: touch.clientY }
    })
    // 双指的中心点
    const centerPoint = getTouchCenter(zoom)
    // 双指两次移动间隔的比例
    const scaleChanged = getScale(that.last.zoom, zoom)

    that.last.zoom = zoom
    that.last.centerPoint = centerPoint

    // 延迟防止手误操作
    if (that.touchDelay) {
      that.touchDelay--
      return
    }

    const scale = this.options.getCurrentStyle().style.scale * scaleChanged
    this.options.scaleTo(centerPoint, scale, false, false)
  }

  /**
   * 检测目标位置是否超出范围
   * @param {Object} target 检测目标 {x,y,scale,width,height}
   * @return {Object} {x, y, isDraw, isLeft, isRight, isTop, isBottom} 返回修正后的位置
   */
  checkPosition({ x, y, scale, width, height }) {
    width = toFixed(width * scale, 2)
    height = toFixed(height * scale, 2)

    const w = view.width() - (width + x)
    const h = view.height() - (height + y)

    let isDraw = false
    let isLeft = false
    let isRight = false
    let isTop = false
    let isBottom = false

    if (height < view.height()) {
      y = (view.height() - height) / 2
      isDraw = isTop = isBottom = true
    } else {
      if (y > 0) {
        // top
        y = 0
        isDraw = isTop = true
      } else if (h > 0) {
        // bottom
        y += h
        isDraw = isBottom = true
      }
    }

    if (width < view.width()) {
      x = (view.width() - width) / 2
      isDraw = isLeft = isRight = true
    } else {
      if (x > 0) {
        // left
        x = 0
        isDraw = isLeft = true
      } else if (w > 0) {
        // right
        x += w
        isDraw = isRight = true
      }
    }

    return { x, y, isDraw, isLeft, isRight, isTop, isBottom }
  }

  validation(style, isDraw) {
    style = style || this.options.getCurrentStyle().style

    const position = this._checkScale(style) || this.checkPosition(style)

    if (position.scale === undefined) {
      position.scale = style.scale
    }

    if (isDraw && position.isDraw) {
      this.animate(position.x, position.y, position.scale)
    }

    return position
  }

  _checkScale(style) {
    const { initStyle } = this.options.getCurrentStyle()
    const maxScale = 1
    const minScale = initStyle.scale
    const that = this

    function setScale(newScale) {
      const { x, y } = originZoom(style, that.last.centerPoint, newScale)

      const position = that.checkPosition({
        x,
        y,
        scale: newScale,
        width: style.width,
        height: style.height
      })
      position.isDraw = true
      position.scale = newScale
      return position
    }

    if (style.scale > maxScale) {
      return setScale(maxScale)
    } else if (style.scale < minScale) {
      return setScale(minScale)
    }
  }

  _isFastMove() {
    const speed = 0.2
    const dif = this.last.dif
    const speedX = dif.x / dif.time
    const speedY = dif.y / dif.time

    if (Math.abs(speedX) > speed || Math.abs(speedY) > speed) {
      const time = 420
      const value = 1.4
      let x = speedX * (time / value)
      let y = speedY * (time / value)
      return { x, y, time: time * 2 }
    }
  }

  animate(x, y, scale, options = { time: 450, type: 'easeOutCubic' }) {
    const style = this.options.getCurrentStyle().style

    this.inAnimation && this.animation.stop()
    this.inAnimation = true

    this.animation = animate({
      targets: [[style.scale, scale], [style.x, x], [style.y, y]],
      time: options.time,
      type: options.type,
      running: target => {
        this.options.setStyle({
          scale: target[0],
          x: target[1],
          y: target[2],
          duration: 0
        })
      },
      stop: () => {
        this.inAnimation = false
      }
    })
  }
}