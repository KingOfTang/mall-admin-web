import Cookies from 'js-cookie' // 导入js-cookie库用于操作浏览器cookie

const TokenKey = 'loginToken' // 定义token在cookie中的键名

export function getToken() { // 获取token函数
  return Cookies.get(TokenKey) // 从cookie中获取token
}

export function setToken(token) { // 设置token函数
  return Cookies.set(TokenKey, token) // 将token存储到cookie中
}

export function removeToken() { // 移除token函数
  return Cookies.remove(TokenKey) // 从cookie中删除token
}
