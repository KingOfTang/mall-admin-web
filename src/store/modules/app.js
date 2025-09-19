import Cookies from 'js-cookie'

// 定义app模块的状态管理对象
const app = {
  // 状态定义
  state: {
    // 侧边栏状态管理
    sidebar: {
      // 侧边栏是否展开，通过读取Cookies中的sidebarStatus来判断初始状态
      // 使用!+将字符串转换为数字再取反，实现状态恢复
      opened: !+Cookies.get('sidebarStatus'),
      // 是否关闭动画效果，默认为false
      withoutAnimation: false
    },
    // 设备类型，默认为桌面端
    device: 'desktop'
  },
  // 状态变更操作定义
  mutations: {
    // 切换侧边栏展开/收起状态
    TOGGLE_SIDEBAR: state => {
      // 如果当前侧边栏是展开状态，则在Cookies中设置状态为1(收起)
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        // 如果当前侧边栏是收起状态，则在Cookies中设置状态为0(展开)
        Cookies.set('sidebarStatus', 0)
      }
      // 切换侧边栏的展开状态
      state.sidebar.opened = !state.sidebar.opened
    },
    // 关闭侧边栏操作
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      // 在Cookies中设置侧边栏状态为收起(1)
      Cookies.set('sidebarStatus', 1)
      // 设置侧边栏为关闭状态
      state.sidebar.opened = false
      // 设置是否需要动画效果
      state.sidebar.withoutAnimation = withoutAnimation
    },
    // 切换设备类型
    TOGGLE_DEVICE: (state, device) => {
      // 更新设备类型状态
      state.device = device
    }
  },
  // 异步操作定义
  actions: {
    // 切换侧边栏状态的action
    ToggleSideBar: ({ commit }) => {
      // 提交TOGGLE_SIDEBAR mutation
      commit('TOGGLE_SIDEBAR')
    },
    // 关闭侧边栏的action
    CloseSideBar({ commit }, { withoutAnimation }) {
      // 提交CLOSE_SIDEBAR mutation，并传递动画参数
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    // 切换设备类型的action
    ToggleDevice({ commit }, dveice) {
      // 提交TOGGLE_DEVICE mutation，并传递设备类型参数
      commit('TOGGLE_DEVICE', device)
    }
  }
}

// 导出app状态管理模块
export default app


// 这段代码是一个Vue.js的状态管理模块，主要功能是：
//
// 1. **状态管理**：管理侧边栏的展开状态和设备类型
// 2. **持久化存储**：使用Cookies记录侧边栏状态，页面刷新后保持状态
// 3. **状态切换**：
//    - `TOGGLE_SIDEBAR`：切换侧边栏开闭状态
// - `CLOSE_SIDEBAR`：关闭侧边栏
// - `TOGGLE_DEVICE`：切换设备类型
// 4. **动作提交**：通过actions提交相应的mutations来修改状态
