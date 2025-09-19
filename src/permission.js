// 引入路由实例
import router from './router'
// 引入状态管理store
import store from './store'
// 引入NProgress进度条插件
import NProgress from 'nprogress'
// 引入NProgress进度条样式
import 'nprogress/nprogress.css'
// 引入ElementUI的Message组件用于提示信息
import { Message } from 'element-ui'
// 引入getToken方法用于获取用户token
import { getToken } from '@/utils/auth'

// 定义不需要重定向的白名单路径
const whiteList = ['/login']
// 设置路由前置守卫
router.beforeEach((to, from, next) => {
  // 开始进度条
  NProgress.start()
  // 判断用户是否已登录(通过token)
  if (getToken()) {
    // 如果已登录且访问的是登录页
    if (to.path === '/login') {
      // 重定向到首页
      next({ path: '/' })
      // 手动结束进度条
      NProgress.done()
    } else {
      // 如果已登录且不是访问登录页
      // 判断store中是否有用户角色信息
      if (store.getters.roles.length === 0) {
        // 没有角色信息则获取用户信息
        store.dispatch('GetInfo').then(res => {
          // 获取用户菜单和用户名
          let menus=res.data.menus;
          let username=res.data.username;
          // 根据菜单生成可访问路由表
          store.dispatch('GenerateRoutes', { menus,username }).then(() => {
            // 动态添加可访问路由
            router.addRoutes(store.getters.addRouters);
            // 跳转到目标路由
            next({ ...to, replace: true })
          })
        }).catch((err) => {
          // 获取信息失败则退出登录
          store.dispatch('FedLogOut').then(() => {
            // 显示错误信息
            Message.error(err || 'Verification failed, please login again')
            // 跳转到首页
            next({ path: '/' })
          })
        })
      } else {
        // 有角色信息直接放行
        next()
      }
    }
  } else {
    // 未登录状态
    // 判断访问路径是否在白名单中
    if (whiteList.indexOf(to.path) !== -1) {
      // 在白名单中直接放行
      next()
    } else {
      // 不在白名单中重定向到登录页
      next('/login')
      // 结束进度条
      NProgress.done()
    }
  }
})

// 设置路由后置守卫
router.afterEach(() => {
  // 结束进度条
  NProgress.done()
})



// 这段代码是Vue项目的路由守卫配置：
//
// 1. **功能**：实现页面访问权限控制和登录状态验证
// 2. **核心逻辑**：
//    - 使用NProgress显示页面加载进度条
//    - 通过token判断用户登录状态
//    - 未登录用户只能访问白名单页面（如登录页）
//    - 已登录用户访问登录页时自动跳转到首页
//    - 首次访问时动态生成用户可访问的路由表
//    - 验权失败时提示错误并跳转到登录页
