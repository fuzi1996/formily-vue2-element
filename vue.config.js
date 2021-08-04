const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.extensions.add('.ts')

    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('ts-loader')
      .loader('ts-loader')
      .end()
  },
}