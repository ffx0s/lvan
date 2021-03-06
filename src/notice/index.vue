<template>
  <div class="v-notice" :class="'v-notice--' + type" v-if="value || show">
    <slot name="left-icon">
      <svg v-if="showIcon" class="v-notice__icon" viewBox="0 0 1024 1024">
        <path
          d="M494.4 171.2l-155.2 97.6c-20.8 12.8-43.2 19.2-67.2 19.2h-76.8c-64 0-115.2 51.2-115.2 113.6v225.6c0 68.8 56 124.8 124.8 124.8h89.6c24 0 46.4 6.4 67.2 19.2l134.4 81.6c9.6 6.4 20.8 9.6 33.6 9.6 35.2 0 64-28.8 64-64V225.6c0-11.2-3.2-24-9.6-33.6-20.8-30.4-59.2-40-89.6-20.8zM528 798.4l-134.4-81.6c-30.4-17.6-64-28.8-99.2-28.8h-89.6C171.2 688 144 660.8 144 627.2V401.6c0-27.2 22.4-49.6 49.6-49.6H272c36.8 0 70.4-9.6 102.4-28.8l155.2-97.6v572.8zM912 480H720c-17.6 0-32 14.4-32 32s14.4 32 32 32h192c17.6 0 32-14.4 32-32s-14.4-32-32-32zM899.2 752l-166.4-96c-16-9.6-35.2-3.2-43.2 11.2-9.6 16-3.2 35.2 11.2 43.2l166.4 96c16 9.6 35.2 3.2 43.2-11.2 9.6-14.4 4.8-33.6-11.2-43.2zM731.2 368l166.4-96c16-9.6 20.8-28.8 11.2-43.2-9.6-16-28.8-20.8-43.2-11.2l-166.4 96c-16 9.6-20.8 28.8-11.2 43.2s28.8 20.8 43.2 11.2z"
          fill="currentColor"
        />
      </svg>
    </slot>
    <slot name="left" />
    <div class="v-notice__title">
      <slot>{{ title }}</slot>
    </div>
    <slot name="right" />
    <slot name="right-icon">
      <VButton
        class="v-notice__close"
        type="icon"
        small
        v-if="showCloseIcon"
        @click="close"
      >
        <svg class="v-notice__close-icon" viewBox="0 0 1024 1024">
          <path
            d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128L512.128 467.904l-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248a31.937 31.937 0 0 0 22.688 9.44c8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408a31.94 31.94 0 0 0 22.592-9.344c12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"
            fill="currentColor"
          />
        </svg>
      </VButton>
    </slot>
  </div>
</template>

<script>
import VButton from '../button'

export default {
  name: 'NoticeDefault',
  components: {
    VButton
  },
  props: {
    value: undefined,
    title: String,
    showCloseIcon: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'warning'
    }
  },
  data() {
    return {
      show: this.value === undefined ? true : this.value
    }
  },
  methods: {
    close() {
      if (this.value === undefined) {
        this.show = false
      } else {
        this.$emit('input', false)
      }
      this.$emit('close')
    }
  }
}
</script>

<style lang="postcss">
:root {
  --alpha: 25%;
}
.v-notice {
  padding: 0 6px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  line-height: 1.5;
  font-size: 12px;
  color: #fff;
  box-sizing: border-box;
  overflow: hidden;
}
.v-notice--warning {
  color: var(--warning);
  background-color: color-mod(var(--warning) alpha(var(--alpha)));
}
.v-notice--primary {
  color: var(--primary);
  background-color: color-mod(var(--primary) alpha(var(--alpha)));
}
.v-notice--success {
  color: var(--success);
  background-color: color-mod(var(--success) alpha(var(--alpha)));
}
.v-notice--error {
  color: var(--error);
  background-color: color-mod(var(--error) alpha(var(--alpha)));
}
.v-notice__title {
  flex: 1;
  padding: 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.v-notice__icon {
  width: 20px;
}
.v-notice__close {
  margin-right: -8px;
  margin-left: 2px;
  padding: 0;
  min-width: 30px;
}
.v-notice__close-icon {
  width: 14px;
  color: #fff;
}
</style>
