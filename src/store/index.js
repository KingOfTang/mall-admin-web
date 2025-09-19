import Vue from 'vue' // 导入Vue框架
import Vuex from 'vuex' // 导入Vuex状态管理库
import app from './modules/app' // 导入app模块
import user from './modules/user' // 导入user模块
import permission from './modules/permission' // 导入permission模块
import getters from './getters' // 导入getters

Vue.use(Vuex) // 在Vue中使用Vuex插件

const store = new Vuex.Store({ // 创建Vuex store实例
  modules: { // 注册模块
    app, // app模块
    user, // user模块
    permission // permission模块
  },
  getters // 注册getters
})

export default store // 导出store实例
