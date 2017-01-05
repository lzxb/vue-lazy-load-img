(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lazy-load-img')) :
  typeof define === 'function' && define.amd ? define(['lazy-load-img'], factory) :
  (global.VueLazyLoadImg = factory(global.LazyLoadImg));
}(this, (function (LazyLoadImg) { 'use strict';

LazyLoadImg = 'default' in LazyLoadImg ? LazyLoadImg['default'] : LazyLoadImg;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var VueLazyLoadImg = {
    render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._t("default")], 2);
    },
    staticRenderFns: [],
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
            default: function _default() {
                return {
                    top: 0, // 元素距离顶部
                    right: 0, // 元素距离右边
                    bottom: 0, // 元素距离下面
                    left: 0 // 元素距离左边
                };
            }
        }
    },
    mounted: function mounted() {
        var _this = this;

        var options = _extends(this.$options.propsData, {
            el: this.$el,
            before: function before() {
                for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                    arg[_key] = arguments[_key];
                }

                // 图片加载之前执行方法
                _this.$emit.apply(_this, ['before'].concat(arg));
            },
            success: function success() {
                for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    arg[_key2] = arguments[_key2];
                }

                // 图片加载成功执行方法
                _this.$emit.apply(_this, ['success'].concat(arg));
            },
            error: function error() {
                for (var _len3 = arguments.length, arg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    arg[_key3] = arguments[_key3];
                }

                // 图片加载失败执行方法
                _this.$emit.apply(_this, ['error'].concat(arg));
            }
        });
        this.lazyLoadImg = new LazyLoadImg(options);
    },
    beforeDestroy: function beforeDestroy() {
        this.lazyLoadImg.destroy();
    }
};

var state = false;

var install$1 = function (Vue) {
    if (state) return;
    state = true;
    Vue.component('vue-lazy-load-img', VueLazyLoadImg);
};

if (typeof window !== 'undefined' && window.Vue) {
    install$1(window.Vue);
}

return install$1;

})));
