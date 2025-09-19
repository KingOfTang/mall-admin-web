import Cookies from "js-cookie"; // 引入js-cookie库用于操作浏览器cookie
const SupportKey='supportKey'; // 定义support状态存储的cookie键名

// 获取support状态的值
export function getSupport() {
  return Cookies.get(SupportKey) // 从cookie中获取SupportKey对应的值
}

// 设置support状态的值
export function setSupport(isSupport) {
  return Cookies.set(SupportKey, isSupport,{ expires: 3 }) // 设置SupportKey的值，过期时间为3天
}

// 通用设置cookie的方法
export function setCookie(key,value,expires) {
  return Cookies.set(key, value,{ expires: expires}) // 设置指定key的cookie值和过期时间
}

// 通用获取cookie的方法
export function getCookie(key) {
  return Cookies.get(key) // 获取指定key的cookie值
}
