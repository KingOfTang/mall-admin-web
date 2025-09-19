import request from '@/utils/request'
/**
 * 获取品牌列表数据
 * @param {Object} params - 请求参数对象
 * @returns {Promise} 返回请求结果的Promise对象
 */
export function fetchList(params) {
  // 发送GET请求获取品牌列表
  return request({
    url:'/brand/list',
    method:'get',
    params:params
  })
}

/**
 * 创建品牌
 * @param {Object} data - 品牌数据对象
 * @returns {Promise} 返回请求Promise对象
 */
export function createBrand(data) {
  // 发送创建品牌请求
  return request({
    url:'/brand/create',
    method:'post',
    data:data
  })
}

/**
 * 更新品牌显示状态
 * @param {Object} data - 包含品牌显示状态更新信息的数据对象
 * @returns {Promise} 返回一个Promise对象，包含请求结果
 */
export function updateShowStatus(data) {
  // 发送POST请求更新品牌显示状态
  return request({
    url:'/brand/update/showStatus',
    method:'post',
    data:data
  })
}


/**
 * 更新工厂状态
 * @param {Object} data - 包含工厂状态更新信息的数据对象
 * @returns {Promise} 返回一个Promise对象，解析后为服务器响应数据
 */
export function updateFactoryStatus(data) {
  // 发送POST请求到品牌工厂状态更新接口
  return request({
    url:'/brand/update/factoryStatus',
    method:'post',
    data:data
  })
}


/**
 * 删除品牌
 * @param {number|string} id - 品牌ID
 * @returns {Promise} 返回删除操作的请求结果
 */
export function deleteBrand(id) {
  return request({
    url:'/brand/delete/'+id,
    method:'get',
  })
}


/**
 * 根据品牌ID获取品牌信息
 * @param {number|string} id - 品牌唯一标识符
 * @returns {Promise} 返回包含品牌信息的Promise对象
 */
export function getBrand(id) {
  return request({
    url:'/brand/'+id,
    method:'get',
  })
}


/**
 * 更新品牌信息
 * @param {number|string} id - 品牌ID
 * @param {object} data - 要更新的品牌数据
 * @returns {Promise} 返回请求Promise对象
 */
export function updateBrand(id,data) {
  // 发送更新品牌请求
  return request({
    url:'/brand/update/'+id,
    method:'post',
    data:data
  })
}


// 这段代码是一个品牌管理的API接口封装模块，提供了以下功能：
//
// - [fetchList](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\brand.js#L1-L7)：获取品牌列表
// - [createBrand](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\brand.js#L8-L14)：创建新品牌
// - [updateShowStatus](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\brand.js#L15-L21)：更新品牌显示状态
// - [updateFactoryStatus](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\brand.js#L23-L29)：更新厂家状态
// - [deleteBrand](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\brand.js#L31-L36)：删除品牌
// - [getBrand](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\brand.js#L38-L43)：获取单个品牌详情
// - [updateBrand](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\api\brand.js#L45-L51)：更新品牌信息
//
// 所有接口都通过`request`工具函数发送HTTP请求。
