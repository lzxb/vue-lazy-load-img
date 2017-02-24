<template>
  <div>
      <slot></slot>
  </div>
</template>
<script>
import LazyLoadImg from 'lazy-load-img'

export default {
  props: {
    mode: { // 默认模式，将显示原图，diy模式，将自定义剪切，默认剪切居中部分
      type: String,
      default: 'default'
    },
    time: { // 设置一个检测时间间隔
      type: Number,
      default: 300
    },
    complete: { // 页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
      type: Boolean,
      default: true
    },
    position: { // 只要其中一个位置符合条件，都会触发加载机制
      type: Object,
      default: () => {
        return {
          top: 0, // 元素距离顶部
          right: 0, // 元素距离右边
          bottom: 0, // 元素距离下面
          left: 0 // 元素距离左边
        }
      }
    }
  },
  mounted () {
    var options = Object.assign(this.$options.propsData, {
      el: this.$el,
      before: (...arg) => { // 图片加载之前执行方法
        this.$emit('before', ...arg)
      },
      success: (...arg) => { // 图片加载成功执行方法
        this.$emit('success', ...arg)
      },
      error: (...arg) => { // 图片加载失败执行方法
        this.$emit('error', ...arg)
      }
    })
    this.lazyLoadImg = new LazyLoadImg(options)
  },
  beforeDestroy () {
    this.lazyLoadImg.destroy()
  }
}
</script>
