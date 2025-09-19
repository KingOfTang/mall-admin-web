import { login, logout, getInfo } from '@/api/login' // 导入登录、登出和获取用户信息的API接口
import { getToken, setToken, removeToken } from '@/utils/auth' // 导入token操作工具函数

const user = {
  state: {
    token: getToken(), // 从本地存储获取token作为初始状态
    name: '', // 用户名初始为空
    avatar: '', // 头像初始为空
    roles: [] // 角色权限初始为空数组
  },

  mutations: {
    SET_TOKEN: (state, token) => { // 设置token的mutation
      state.token = token // 更新state中的token
    },
    SET_NAME: (state, name) => { // 设置用户名的mutation
      state.name = name // 更新state中的用户名
    },
    SET_AVATAR: (state, avatar) => { // 设置头像的mutation
      state.avatar = avatar // 更新state中的头像
    },
    SET_ROLES: (state, roles) => { // 设置角色权限的mutation
      state.roles = roles // 更新state中的角色权限
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) { // 登录action，接收用户信息参数
      const username = userInfo.username.trim() // 去除用户名前后空格
      return new Promise((resolve, reject) => { // 返回Promise处理异步操作
        login(username, userInfo.password).then(response => { // 调用登录API
          const data = response.data // 获取响应数据
          const tokenStr = data.tokenHead + data.token // 拼接完整token字符串
          setToken(tokenStr) // 将token保存到本地存储
          commit('SET_TOKEN', tokenStr) // 提交mutation更新state中的token
          resolve() // 解析Promise
        }).catch(error => { // 捕获登录错误
          reject(error) // 拒绝Promise并返回错误
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) { // 获取用户信息action
      return new Promise((resolve, reject) => { // 返回Promise处理异步操作
        getInfo().then(response => { // 调用获取用户信息API
          const data = response.data // 获取响应数据
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles) // 提交mutation设置角色权限
          } else {
            reject('getInfo: roles must be a non-null array !') // 如果角色权限为空则拒绝Promise
          }
          commit('SET_NAME', data.username) // 提交mutation设置用户名
          commit('SET_AVATAR', data.icon) // 提交mutation设置头像
          resolve(response) // 解析Promise并返回响应
        }).catch(error => { // 捕获获取信息错误
          reject(error) // 拒绝Promise并返回错误
        })
      })
    },

    // 登出
    LogOut({ commit, state }) { // 登出action
      return new Promise((resolve, reject) => { // 返回Promise处理异步操作
        logout(state.token).then(() => { // 调用登出API
          commit('SET_TOKEN', '') // 提交mutation清空token
          commit('SET_ROLES', []) // 提交mutation清空角色权限
          removeToken() // 从本地存储移除token
          resolve() // 解析Promise
        }).catch(error => { // 捕获登出错误
          reject(error) // 拒绝Promise并返回错误
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) { // 前端登出action（仅清除本地状态）
      return new Promise(resolve => { // 返回Promise处理异步操作
        commit('SET_TOKEN', '') // 提交mutation清空token
        removeToken() // 从本地存储移除token
        resolve() // 解析Promise
      })
    }
  }
}

export default user // 导出user模块



// 这段代码是Vue.js项目中用于管理用户认证状态的Vuex模块。主要功能包括：
//
// 1. **状态管理**：存储token、用户名、头像和角色信息。
// 2. **登录**：调用[login](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\login.js#L8-L17)接口获取token并保存。
// 3. **获取用户信息**：通过[getInfo](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\login.js#L23-L28)接口更新用户资料。
// 4. **登出**：清除本地token及状态。
//
// 使用了Promise处理异步请求，确保状态同步更新。
