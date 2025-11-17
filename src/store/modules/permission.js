import { asyncRouterMap, constantRouterMap } from '@/router/index'; // 导入异步路由和常量路由

// 判断是否有权限访问该菜单
function hasPermission(menus, route) {
  if (route.name) { // 如果路由有名称
    let currMenu = getMenu(route.name, menus); // 获取当前菜单
    if (currMenu != null) { // 如果菜单存在
      // 设置菜单的标题、图标和可见性
      if (currMenu.title != null && currMenu.title !== '') { // 如果菜单标题存在且不为空
        route.meta.title = currMenu.title; // 设置路由标题
      }
      if (currMenu.icon != null && currMenu.title !== '') { // 如果菜单图标存在且标题不为空
        route.meta.icon = currMenu.icon; // 设置路由图标
      }
      if (currMenu.hidden != null) { // 如果菜单隐藏属性存在
        route.hidden = currMenu.hidden !== 0; // 设置路由隐藏属性
      }
      if (currMenu.sort != null && currMenu.sort !== '') { // 如果菜单排序存在且不为空
        route.sort = currMenu.sort; // 设置路由排序
      }
      return true; // 返回有权限
    } else { // 如果菜单不存在
      route.sort = 0; // 设置默认排序为0
      if (route.hidden !== undefined && route.hidden === true) { // 如果路由明确设置为隐藏
        route.sort = -1; // 设置排序为-1
        return true; // 返回有权限
      } else {
        return false; // 返回无权限
      }
    }
  } else {
    return true; // 如果路由没有名称，则默认有权限
  }
}

// 根据路由名称获取菜单
function getMenu(name, menus) {
  for (let i = 0; i < menus.length; i++) { // 遍历菜单列表
    let menu = menus[i]; // 获取当前菜单
    if (name === menu.name) { // 如果路由名称匹配菜单名称
      return menu; // 返回匹配的菜单
    }
  }
  return null; // 没有找到匹配的菜单返回null
}

// 对菜单进行排序
function sortRouters(accessedRouters) {
  for (let i = 0; i < accessedRouters.length; i++) { // 遍历可访问路由
    let router = accessedRouters[i]; // 获取当前路由
    if (router.children && router.children.length > 0) { // 如果路由有子路由
      router.children.sort(compare("sort")); // 对子路由按排序字段排序
    }
  }
  accessedRouters.sort(compare("sort")); // 对路由按排序字段排序
}

// 降序比较函数
function compare(p) {
  return function(m, n) { // 返回比较函数
    let a = m[p]; // 获取第一个元素的比较字段值
    let b = n[p]; // 获取第二个元素的比较字段值
    return b - a; // 返回降序比较结果
  }
}

const permission = {
  state: {
    routers: constantRouterMap, // 默认路由
    addRouters: [] // 动态添加的路由
  },
  mutations: {
    SET_ROUTERS: (state, routers) => { // 设置路由的mutation
      state.addRouters = routers; // 设置动态添加的路由
      state.routers = constantRouterMap.concat(routers); // 合并默认路由和动态路由
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) { // 生成路由的action
      return new Promise(resolve => { // 返回Promise
        const { menus } = data; // 获取菜单数据
        const { username } = data; // 获取用户名
        const accessedRouters = asyncRouterMap.filter(v => { // 过滤异步路由
          // admin帐号直接返回所有菜单
          if(username==='admin') return true;
          // if (hasPermission(menus, v)) { // 判断是否有权限访问路由
          //   if (v.children && v.children.length > 0) { // 如果有子路由
          //     v.children = v.children.filter(child => { // 过滤子路由
          //       if (hasPermission(menus, child)) { // 判断子路由是否有权限
          //         return child; // 返回有权限的子路由
          //       }
          //       return false; // 返回无权限的子路由
          //     });
          //     return v; // 返回有权限的路由
          //   } else {
          //     return v; // 返回没有子路由的路由
          //   }
          // }
          return false; // 返回无权限的路由
        });
        // 对菜单进行排序
        sortRouters(accessedRouters); // 对可访问路由进行排序
        commit('SET_ROUTERS', accessedRouters); // 提交路由设置
        resolve(); // 解析Promise
      })
    }
  }
};

export default permission; // 导出权限模块


// 这段代码实现的是前端路由权限控制和动态菜单生成。主要功能包括：
//
// 1. 根据用户权限过滤路由（[hasPermission](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\modules\permission.js#L3-L33)），并设置菜单标题、图标等属性；
// 2. 通过菜单名称匹配获取具体菜单项（[getMenu](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\modules\permission.js#L36-L44)）；
// 3. 对过滤后的路由进行排序（[sortRouters](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\modules\permission.js#L47-L55) 和 [compare](file://F:\baiducloud\mall-swarm-web\mall-admin-web\src\store\modules\permission.js#L58-L64)）；
// 4. 使用 Vuex 管理动态路由状态，在 `GenerateRoutes` 中根据用户权限生成可访问的路由表，并提交到 store。
//
// 整体用于实现基于角色或权限的动态菜单展示与路由控制。
