const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  routers: state => state.permission.routers
}
export default getters

// 这段代码定义了一个Vuex的getters对象，用于从store中获取各种状态数据：
//
// - [sidebar](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\getters.js#L1-L1)、[device](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\getters.js#L2-L2)：获取应用状态
// - [token](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\getters.js#L3-L3)、[avatar](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\getters.js#L4-L4)、[name](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\getters.js#L5-L5)、[roles](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\getters.js#L6-L6)：获取用户信息
// - [addRouters](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\getters.js#L7-L7)、[routers](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\getters.js#L8-L8)：获取权限路由信息
//
// 通过箭头函数简化了状态获取逻辑，便于组件中调用。
