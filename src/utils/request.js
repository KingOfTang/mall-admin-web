import axios from 'axios' // 引入axios库用于发送HTTP请求
import { Message, MessageBox } from 'element-ui' // 引入element-ui的消息提示和确认框组件
import store from '../store' // 引入Vuex store实例
import { getToken } from '@/utils/auth' // 引入获取token的工具函数

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // 设置请求的基础URL，从环境变量中获取
  timeout: 15000 // 设置请求超时时间为15秒
})

// request拦截器 - 在请求发送前进行处理
service.interceptors.request.use(config => {
  if (store.getters.token) { // 如果store中有token
    config.headers['Authorization'] = getToken() // 在请求头中添加Authorization字段携带token
  }
  return config // 返回配置对象
}, error => {
  // 请求错误处理
  console.log(error) // 打印错误信息用于调试
  Promise.reject(error) // 返回拒绝状态的Promise
})

// response拦截器 - 对响应数据进行处理
service.interceptors.response.use(
  response => {
  /**
  * code为非200是抛错 可结合自己业务进行修改
  */
    const res = response.data // 获取响应数据
    if (res.code !== 200) { // 如果响应码不是200（成功）
      Message({
        message: res.message, // 显示错误信息
        type: 'error', // 错误提示类型
        duration: 3 * 1000 // 显示时长3秒
      })

      // 401:未登录;
      if (res.code === 401) { // 如果是401未登录错误
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录', // 确认按钮文本
          cancelButtonText: '取消', // 取消按钮文本
          type: 'warning' // 提示类型为警告
        }).then(() => { // 用户点击确认后执行
          store.dispatch('FedLogOut').then(() => { // 触发登出操作
            location.reload()// 重新加载页面以重新实例化vue-router对象避免bug
          })
        })
      }
      return Promise.reject('error') // 返回拒绝状态的Promise
    } else {
      return response.data // 返回成功的响应数据
    }
  },
  error => {
    console.log('err' + error)// 打印错误信息用于调试
    Message({
      message: error.message, // 显示错误信息
      type: 'error', // 错误提示类型
      duration: 3 * 1000 // 显示时长3秒
    })
    return Promise.reject(error) // 返回拒绝状态的Promise
  }
)

export default service // 导出配置好的axios实例
