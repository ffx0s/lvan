(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6426d5a7","chunk-46998404"],{"013f":function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},"0293":function(t,e,n){var i=n("241e"),o=n("53e2");n("ce7e")("getPrototypeOf",(function(){return function(t){return o(i(t))}}))},"061b":function(t,e,n){t.exports=n("fa99")},1770:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i,o=n("bd86"),s=n("7618"),a=n("d225"),r=n("b0b4"),c=n("308d"),u=n("6bb5"),h=n("4e2b"),l=(n("28a5"),n("ac6a"),Array.prototype.slice),p=function(){function t(){Object(a["a"])(this,t),this.listeners={}}return Object(r["a"])(t,[{key:"on",value:function(t,e,n){var i=this;return t.split(" ").forEach((function(t){i.listeners[t]||(i.listeners[t]=[]),e&&i.listeners[t].push({fn:e,once:n})})),this}},{key:"emit",value:function(t){var e=this,n=l.call(arguments,1);t.split(" ").forEach((function(t){var i=e.listeners[t];if(i)for(var o=i.length,s=0;s<o;s++){var a=i[s];a&&(i[s].fn.apply(e,n),i[s].once&&i.splice(s--,1))}}))}},{key:"off",value:function(t,e){var n=this.listeners[t];if(n){if(!e)return void(this.listeners[t]=[]);for(var i=n.length,o=0;o<i;o++)if(n[o]&&n[o].fn===e)return void n.splice(o,1)}t||(this.listeners={})}}]),t}(),f=n("f6da");function v(t){return t.touches?t.touches:[t]}function d(t,e){return t+e}function m(t){return{x:t.map((function(t){return t.x})).reduce(d)/t.length,y:t.map((function(t){return t.y})).reduce(d)/t.length}}function y(t,e){var n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)}function b(t,e){return y(e[0],e[1])/y(t[0],t[1])}function _(t,e){var n=t.x-e.x,i=t.y-e.y;return 180*Math.atan2(i,n)/Math.PI}function g(t,e,n){var i=e.x-t.x,o=e.y-t.y,s=1-n/t.scale,a=t.x+i*s,r=t.y+o*s;return{x:a,y:r}}var O=function(t){function e(t){var n;return Object(a["a"])(this,e),n=Object(c["a"])(this,Object(u["a"])(e).call(this)),n.data={},n.options=Object.assign({},e.defaultOptions,t),n.options.el&&n.bind(),n}return Object(h["a"])(e,t),Object(r["a"])(e,[{key:"setOptions",value:function(t){return Object.assign(this.options,t),this}},{key:"bind",value:function(){this._touchEvents(f["a"])}},{key:"unbind",value:function(){this._touchEvents(f["n"])}},{key:"handleEvent",value:function(t){switch(t.type){case"touchstart":this.down(t);break;case"touchmove":case"mousemove":this.move(t);break;case"touchend":this.up(t);break;case"mousedown":this._mouseEvents("down",f["a"],t);break;case"mouseup":this._mouseEvents("up",f["n"],t)}}},{key:"down",value:function(t){var e=v(t);this.moving=!1,this.touchesLength=e.length,this._startTouchesLength=this.touchesLength;var n=e[this.touchesLength-1],i=n.clientX,o=n.clientY;this.data.clientX=i,this.data.clientY=o,this.emit(this.options.eventTypes.down,t,this.data)}},{key:"move",value:function(t){var e=this.options,n=e.lockDirection,i=e.eventTypes,o=this._hasListeners(i.pinchmove),s=this._hasListeners(i.rotatemove),a=this._hasListeners(i.panmove),r=v(t);2===this.touchesLength&&(o||s)?this._gesturechange(r,t,o,s):(a||n)&&this._panmove(r,t),this.moved=this.moving=!0}},{key:"up",value:function(t){var e=this.options.eventTypes,n=e.up,i=e.pinchmove,o=e.rotatemove,s=v(t),a=this.data.type;this.touchesLength=s.length,this.emit(n,t,this.data),this.moved?(a&&-1!==a.indexOf("pan")?this._panend(t):(a===i&&this._pinchend(t),a===o&&this._rotateend(t)),this.moving=!1):1===this._startTouchesLength?this._mockDoubleTap(t):this.data.type=""}},{key:"is",value:function(t){return this.action===t}},{key:"destroy",value:function(){this.options.el&&this.unbind()}},{key:"_touchEvents",value:function(t){var e=this.options,n=e.el,i=e.touchstartEventOptions,o=e.touchmoveEventOptions,s=e.touchendEventOptions;t(n,"touchstart",this,i),t(n,"touchmove",this,o),t(n,"touchend",this,s),Object(f["i"])()||t(n,"mousedown",this,i)}},{key:"_mouseEvents",value:function(t,n,i){var o=this.options,s=o.touchmoveEventOptions,a=o.touchendEventOptions;e.preventDefault(i),this[t](i),n(document,"mousemove",this,s),n(document,"mouseup",this,a)}},{key:"_mockDoubleTap",value:function(t){var e=this,n=this.options,i=n.eventTypes,o=n.tapDelay,s=this._hasListeners(i.tap),a=this._hasListeners(i.doubletap);a?(this._tapCount=this._tapCount||0,this._tapCount++,clearTimeout(this._tapTimer),2===this._tapCount?(this._tapCount=0,this._emit(i.doubletap,t)):this._tapTimer=setTimeout((function(){e._tapCount=0,e._emit(i.tap,t)}),o)):s&&this._emit(i.tap,t)}},{key:"_verifyDirection",value:function(){var t=this.options.lockDirection;return!1===t||t&&t===this.direction}},{key:"_setDirection",value:function(t,n){if(0!==t||0!==n){var i=Math.abs(t)>=Math.abs(n);i?(this.direction=e.HORIZONTAL,this._setAction(t)):(this.direction=e.VERTICAL,this._setAction(n))}}},{key:"_setAction",value:function(t){this.action=e.propsMap[this.direction][t<=0?0:1],this.isSwipe=Math.abs(t)>this.options.threshold}},{key:"_panstart",value:function(t,e){var n=t[this.touchesLength-1],i=n.clientX,o=n.clientY,s=this.options,a=s.eventTypes,r=s.position,c=r(),u=c.x,h=c.y,l=i-this.data.clientX,p=o-this.data.clientY;this._setDirection(l,p),this._verifyDirection()&&(this.startPosition={x:u,y:h},this.isSwipe=!1,this.timeStamp=e.timeStamp,this.data={clientX:i,clientY:o,vx:l,vy:p,deltaX:0,deltaY:0,time:0},this._emit(a.panstart,e))}},{key:"_panmove",value:function(t,n){var i=t[this.touchesLength-1],o=i.clientX,s=i.clientY,a=this.options,r=a.lockDirection,c=a.eventTypes;if(this.moving||this._panstart(t,n),this._verifyDirection()){var u=this.data,h=o-u.clientX,l=s-u.clientY;if(h||l){var p=u.deltaX+h,f=u.deltaY+l,v=this.startPosition,d=v.x,m=v.y,y={x:d+p,y:m+f},b=n.timeStamp-this.timeStamp;if(this.timeStamp=n.timeStamp,r){var _=this.direction===e.HORIZONTAL?h:l;this._setAction(_)}else this._setDirection(h,l);this.data={vx:h,vy:l,deltaX:p,deltaY:f,clientX:o,clientY:s,time:b,position:y},r?this._emit(this.action,n):this._emit(c.panmove,n)}}}},{key:"_panend",value:function(t){(this.touchesLength||this._verifyDirection())&&(this._emit(this.options.eventTypes.panend,t),this.moved=!1)}},{key:"_gesturechange",value:function(t,e,n,i){var o=Object(f["k"])(t).map((function(t){return{x:t.clientX,y:t.clientY}}));n&&this._pinchmove(o,e),i&&this._rotatemove(o,e),this.data.zoom=o}},{key:"_pinchstart",value:function(t,e,n){var i=this.options,o=i.eventTypes,s=i.position,a=s(),r=a.x,c=a.y,u=a.scale;this.startPosition={x:r,y:c,scale:u},this.data={zoom:t,center:e,scale:1,vx:0,vy:0,deltaX:0,deltaY:0,position:{x:r,y:c,scale:u}},this._emit(o.pinchstart,n)}},{key:"_pinchmove",value:function(t,e){var n=this.options,i=n.eventTypes,o=n.origin,a=n.zoomMove,r=n.maxScale,c=n.minScale,u=m(t);this.moving||this._pinchstart(t,u,e);var h=this.data,l=b(h.zoom,t)-1,p=h.scale+=l,f=u.x-h.center.x,v=u.y-h.center.y,d=h.deltaX+f,y=h.deltaY+v,_=this.startPosition,O=_.x,k=_.y,x=_.scale,T=p*x;r&&T>r?T=r:c&&T<c&&(T=c);var w={};if(o){var E="object"===Object(s["a"])(o)?o:u,j=g(h.position,E,T);w.x=j.x,w.y=j.y,w.scale=T,a&&(w.x+=f,w.y+=v)}else w={x:O,y:k,scale:T},a&&(w.x=O+d,w.y=k+y);Object.assign(this.data,{center:u,scale:p,vx:f,vy:v,deltaX:d,deltaY:y,position:w}),this._emit(i.pinchmove,e)}},{key:"_pinchend",value:function(t){this._emit(this.options.eventTypes.pinchend,t),this.moved=!1}},{key:"_rotatestart",value:function(t,e){var n=this.options,i=n.eventTypes,o=n.position,s=o(),a=s.rotation;this.startPosition.rotation=a,this.data.rotation=0,this.data.zoom=t,this._emit(i.rotatestart,e)}},{key:"_rotatemove",value:function(t,e){var n=this.options.eventTypes;this.moving||this._rotatestart(t,e);var i=this.data,o=_(t[0],t[1])-_(i.zoom[0],i.zoom[1]),s=i.rotation+=o,a=this.startPosition.rotation,r=s+a;i.position.rotation=r,i.rotation=s,this._emit(n.rotatemove,e)}},{key:"_rotateend",value:function(t){this._emit(this.options.eventTypes.rotateend,t),this.moved=!1}},{key:"_emit",value:function(t,e){this.data.type=t,this._input(e),this.emit(t,e,this.data)}},{key:"_input",value:function(t){var e=this.options.eventTypes.input;this._hasListeners(e)&&this.emit(e,t,this.data)}},{key:"_hasListeners",value:function(t){var e=this.listeners[t];return e&&e.length}}]),e}(p),k={passive:!1};O.defaultOptions={el:null,touchstartEventOptions:k,touchmoveEventOptions:k,touchendEventOptions:k,lockDirection:!1,eventTypes:{down:"down",up:"up",panstart:"panstart",panmove:"panmove",panend:"panend",pinchstart:"pinchstart",pinchmove:"pinchmove",pinchend:"pinchend",rotatestart:"rotatestart",rotatemove:"rotatemove",rotateend:"rotateend",panleft:"panleft",panright:"panright",panup:"panup",pandown:"pandown",tap:"tap",doubletap:"doubletap",input:"input"},tapDelay:200,threshold:3,origin:!1,zoomMove:!0,position:function(){return{x:0,y:0,scale:1,rotation:0}},maxScale:null,minScale:null},O.HORIZONTAL="horizontal",O.VERTICAL="vertical",O.propsMap=(i={},Object(o["a"])(i,O.HORIZONTAL,[O.defaultOptions.eventTypes.panleft,O.defaultOptions.eventTypes.panright]),Object(o["a"])(i,O.VERTICAL,[O.defaultOptions.eventTypes.panup,O.defaultOptions.eventTypes.pandown]),i),O.rAFThrottle=f["m"],O.originZoom=g,O.preventDefault=function(t){t.cancelable&&t.preventDefault()}},"1c4c":function(t,e,n){"use strict";var i=n("9b43"),o=n("5ca1"),s=n("4bf8"),a=n("1fa8"),r=n("33a4"),c=n("9def"),u=n("f1ae"),h=n("27ee");o(o.S+o.F*!n("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,p=s(t),f="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,m=void 0!==d,y=0,b=h(p);if(m&&(d=i(d,v>2?arguments[2]:void 0,2)),void 0==b||f==Array&&r(b))for(e=c(p.length),n=new f(e);e>y;y++)u(n,y,m?d(p[y],y):p[y]);else for(l=b.call(p),n=new f;!(o=l.next()).done;y++)u(n,y,m?a(l,d,[o.value,y],!0):o.value);return n.length=y,n}})},"1df8":function(t,e,n){var i=n("63b6");i(i.S,"Object",{setPrototypeOf:n("ead6").set})},"25b0":function(t,e,n){n("1df8"),t.exports=n("584a").Object.setPrototypeOf},"308d":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("7618"),o=n("013f");function s(t,e){return!e||"object"!==Object(i["a"])(e)&&"function"!==typeof e?Object(o["a"])(t):e}},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"4aa6":function(t,e,n){t.exports=n("dc62")},"4d16":function(t,e,n){t.exports=n("25b0")},"4e2b":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("4aa6"),o=n.n(i),s=n("4d16"),a=n.n(s);function r(t,e){return r=a.a||function(t,e){return t.__proto__=e,t},r(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5af7":function(t,e,n){var i=n("e001");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("499e").default;o("560d7c8c",i,!0,{sourceMap:!1,shadowMode:!1})},"5df3":function(t,e,n){"use strict";var i=n("02f4")(!0);n("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})}))},"6b54":function(t,e,n){"use strict";n("3846");var i=n("cb7c"),o=n("0bfb"),s=n("9e1e"),a="toString",r=/./[a],c=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?c((function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?o.call(t):void 0)})):r.name!=a&&c((function(){return r.call(this)}))},"6bb5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("061b"),o=n.n(i),s=n("4d16"),a=n.n(s);function r(t){return r=a.a?o.a:function(t){return t.__proto__||o()(t)},r(t)}},"923d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{overflow:"hidden"}},[n("Navbar",{attrs:{title:"Scroll"}}),n("div",{ref:"scroll",staticClass:"scroll"},t._l(t.items,(function(e){return n("div",{key:e,staticClass:"scroll-item",style:{background:e}},[t._v("\n      "+t._s(e)+"\n    ")])})),0)],1)},o=[],s=(n("5df3"),n("1c4c"),n("6b54"),n("1770")),a=n("f6da"),r="cubic-bezier(0.215, 0.61, 0.355, 1)",c="cubic-bezier(.17,.88,.29,1.13)",u=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)},h={name:"page-scroll",data:function(){return{items:Array.from({length:30},(function(){return u()}))}},mounted:function(){var t=this;this.transform={y:0,duration:0},this.rafUpdateElement=s["a"].rAFThrottle(this.updateElement),this.touch=new s["a"]({el:this.$refs.scroll,lockDirection:s["a"].VERTICAL,position:function(){return t.transform}}).on("down",this.down).on("pandown panup",this.move).on("panend",this.up)},beforeDestroy:function(){this.touch.destroy(),this.touch=null},methods:{down:function(t){s["a"].preventDefault(t),this.rafUpdateElement.cancel();var e=Object(a["e"])(this.$refs.scroll),n=e.y;this.updateElement(n,0)},move:function(t,e){var n=e.position;s["a"].preventDefault(t),this.isTop()&&(n.y*=.1),this.rafUpdateElement(n.y)},up:function(t,e){var n=this.touch,i=n.direction,o=n.isSwipe;if("horizontal"!==i)if(this.rafUpdateElement.cancel(),o)this.updateElement(this.transform.y+50*e.vy,2e3,r);else if(this.isTop())this.updateElement(0,500);else{var s=this.isBottom();s&&this.updateElement(s,500)}},updateElement:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=this.$refs.scroll.style;i.transform=i.webkitTransform="\n        translate3d(0, ".concat(t,"px, 0)\n      "),i.transitionTimingFunction=i.webkitTransitionTimingFunction=n,i.transitionDuration=i.webkitTransitionDuration="".concat(e,"ms"),this.transform={y:t,duration:e}},checkPosition:function(t){var e=500+10*Math.abs(this.touch.data.vy),n=c;if(t>=0)return{y:0,duration:e,timing:n};var i=-(this.$refs.scroll.scrollHeight-a["r"].height()+56);return t<i?{y:i,duration:e,timing:n}:void 0},isTop:function(){return this.transform.y>=0},isBottom:function(){var t=-(this.$refs.scroll.scrollHeight-a["r"].height()+56);return this.transform.y<t?t:this.transform.y}}},l=h,p=(n("b87d"),n("2877")),f=Object(p["a"])(l,i,o,!1,null,null,null);e["default"]=f.exports},9427:function(t,e,n){var i=n("63b6");i(i.S,"Object",{create:n("a159")})},b0b4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("85f2"),o=n.n(i);function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),o()(t,i.key,i)}}function a(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}},b87d:function(t,e,n){"use strict";var i=n("5af7"),o=n.n(i);o.a},ce7e:function(t,e,n){var i=n("63b6"),o=n("584a"),s=n("294c");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),i(i.S+i.F*s((function(){n(1)})),"Object",a)}},d225:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},dc62:function(t,e,n){n("9427");var i=n("584a").Object;t.exports=function(t,e){return i.create(t,e)}},e001:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".scroll{position:relative;z-index:-1}.scroll-item{height:150px;line-height:150px;text-align:center;background-color:#fff}",""])},ead6:function(t,e,n){var i=n("f772"),o=n("e4ae"),s=function(t,e){if(o(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("d864")(Function.call,n("bf0b").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},fa99:function(t,e,n){n("0293"),t.exports=n("584a").Object.getPrototypeOf}}]);