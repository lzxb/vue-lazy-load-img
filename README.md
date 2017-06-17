## 关于
本插件基于[lazy-load-img](https://github.com/lzxb/lazy-load-img)的vue版本实现，请到[lazy-load-img](https://github.com/lzxb/lazy-load-img)查看文档

## 开发
```
npm install 
npm run dev
```

## 使用
* 支持模块化加载和浏览器中直接引入使用
* npm install --save-dev lazy-load-img vue-lazy-load-img
```javascript

import Vue from 'vue'
import VueLazyLoadImg from 'vue-lazy-load-img'

Vue.use(VueLazyLoadImg)

```
```vue
<vue-lazy-load-img 
    mode="diy"
    :time="300"
    :done="true"
    :position="{ top: 0, right: 0, bottom: 0, left: 0 }"
    :diy="{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }"
    @before="before" 
    @success="success" 
    @error="error">
    <img src="./images/default.png" data-src="./images/test.png" alt="">
</vue-lazy-load-img>
```
