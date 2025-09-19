'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:8080"'              单体服务配置
  BASE_API: '"http://localhost:8201/mall-admin"'   // 本地微服务环境配置
  // BASE_API: '"http://3.19.61.10:8201/mall-admin"'  亚马逊云环境配置
})

// 这段代码是webpack配置文件，功能如下：
//
// 1. **严格模式**：启用JavaScript严格模式
// 2. **环境配置合并**：使用webpack-merge将生产环境配置(prod.env)与开发环境配置合并
// 3. **环境变量设置**：设置NODE_ENV为development，配置不同环境的API基础路径
// 4. **多环境支持**：通过注释提供了本地单体服务、本地微服务、云环境三种API配置选项

