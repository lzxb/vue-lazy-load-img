import VueLazyLoadImg from './vue-lazy-load-img.vue'
import install from './install'

VueLazyLoadImg.install = install

export default VueLazyLoadImg

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
