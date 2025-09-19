'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

// 这段代码是webpack的CSS相关配置模块。主要功能包括：
//
// 1. **环境判断**：根据[NODE_ENV](file://F:\baiducloud\mall-swarm-web\mall-admin-web\config\prod.env.js#L2-L2)确定是否为生产环境
// 2. **source map配置**：生产环境使用build配置，开发环境使用dev配置
// 3. **CSS加载器配置**：通过`utils.cssLoaders`生成不同环境下的CSS加载器
// 4. **资源转换配置**：指定哪些HTML标签的属性需要被转换为require调用
//
// 整体用于配置Vue项目中CSS文件的处理方式。
