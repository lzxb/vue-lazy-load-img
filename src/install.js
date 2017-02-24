import VueLazyLoadImg from './vue-lazy-load-img.vue'

var state = false

export default function (Vue) {
  if (state) return
  state = true
  Vue.component('vue-lazy-load-img', VueLazyLoadImg)
}
