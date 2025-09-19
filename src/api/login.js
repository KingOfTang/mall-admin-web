import request from '@/utils/request'

/**
 * 用户登录
 * @param {string} username - 用户名
 * @param {string} password - 密码
 * @returns {Promise} 登录请求的Promise对象
 */
export function login(username, password) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户信息
 * @returns {Promise} 获取用户信息请求的Promise对象
 */
export function getInfo() {
  return request({
    url: '/admin/info',
    method: 'get',
  })
}

/**
 * 用户退出登录
 * @returns {Promise} 退出登录请求的Promise对象
 */
export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}

/**
 * 获取管理员列表
 * @param {Object} params - 查询参数
 * @returns {Promise} 获取管理员列表请求的Promise对象
 */
export function fetchList(params) {
  return request({
    url: '/admin/list',
    method: 'get',
    params: params
  })
}

/**
 * 创建管理员
 * @param {Object} data - 管理员数据
 * @returns {Promise} 创建管理员请求的Promise对象
 */
export function createAdmin(data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data: data
  })
}

/**
 * 更新管理员信息
 * @param {number} id - 管理员ID
 * @param {Object} data - 更新的管理员数据
 * @returns {Promise} 更新管理员请求的Promise对象
 */
export function updateAdmin(id, data) {
  return request({
    url: '/admin/update/' + id,
    method: 'post',
    data: data
  })
}

/**
 * 更新管理员状态
 * @param {number} id - 管理员ID
 * @param {Object} params - 状态参数
 * @returns {Promise} 更新状态请求的Promise对象
 */
export function updateStatus(id, params) {
  return request({
    url: '/admin/updateStatus/' + id,
    method: 'post',
    params: params
  })
}

/**
 * 删除管理员
 * @param {number} id - 管理员ID
 * @returns {Promise} 删除管理员请求的Promise对象
 */
export function deleteAdmin(id) {
  return request({
    url: '/admin/delete/' + id,
    method: 'post'
  })
}

/**
 * 根据管理员ID获取角色信息
 * @param {number} id - 管理员ID
 * @returns {Promise} 获取角色信息请求的Promise对象
 */
export function getRoleByAdmin(id) {
  return request({
    url: '/admin/role/' + id,
    method: 'get'
  })
}

/**
 * 分配角色给管理员
 * @param {Object} data - 角色分配数据
 * @returns {Promise} 分配角色请求的Promise对象
 */
export function allocRole(data) {
  return request({
    url: '/admin/role/update',
    method: 'post',
    data: data
  })
}

