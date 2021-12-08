const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV==='production'
      ? '/money-website/'
      :'/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons')//确定icon所在的目录，__dirname就是当前目录

    config.module//config是VUE封装的webpack对象
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 只包含 icons 目录，其它目录不走这个规则
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()//不解析文件
      //.use('svgo-loader').loader('svgo-loader')
      //.tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])//配置插件
    config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
  }
}


// const path = require('path')
//
// module.exports = {
//   lintOnSave: false,
//   publicPath: '/vue-money/',
//   chainWebpack: config => {
//     const dir = path.resolve(__dirname, 'src/assets/icons')
//
//     config.module
//       .rule('svg-sprite')
//       .test(/\.svg$/)
//       .include.add(dir).end() // 包含 icons 目录
//       .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
//       .use('svgo-loader').loader('svgo-loader')
//       .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
//     config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
//     config.module.rule('svg').exclude.add(dir) // 其他 svg loader 排除 icons 目录
//   }
// }