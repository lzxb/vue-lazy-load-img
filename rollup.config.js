const path = require('path')
const { rollup } = require('rollup')
const vue = require('rollup-plugin-vue2')
const babel = require('rollup-plugin-babel')

module.exports = {
    entry: 'src/index.js',
    moduleName: 'VueLazyLoadImg',
    format: 'umd',
    dest: 'dist/vue-lazy-load-img.js',
    plugins: [
        vue(),
        babel()
    ],
    globals: {
        'lazy-load-img': 'LazyLoadImg'
    },
    external: ['lazy-load-img']
}