'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:8080"'
  // BASE_API: '"http://localhost:8201/mall-admin"'
  BASE_API: '"http://3.19.61.10:8201/mall-admin"'
})
