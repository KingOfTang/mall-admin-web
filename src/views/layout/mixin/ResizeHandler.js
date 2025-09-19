import store from '@/store' // 引入Vuex store实例

const { body } = document // 获取document的body元素
const WIDTH = 1024 // 定义移动端最大宽度阈值
const RATIO = 3 // 定义宽度比例系数

export default { // 导出默认对象
  watch: { // 监听器
    $route(route) { // 监听路由变化
      if (this.device === 'mobile' && this.sidebar.opened) { // 如果是移动端且侧边栏打开
        store.dispatch('CloseSideBar', { withoutAnimation: false }) // 关闭侧边栏（带动画）
      }
    }
  },
  beforeMount() { // 组件挂载前
    window.addEventListener('resize', this.resizeHandler) // 添加窗口大小改变事件监听器
  },
  mounted() { // 组件挂载后
    const isMobile = this.isMobile() // 判断是否为移动端
    if (isMobile) { // 如果是移动端
      store.dispatch('ToggleDevice', 'mobile') // 切换设备类型为移动端
      store.dispatch('CloseSideBar', { withoutAnimation: true }) // 关闭侧边栏（无动画）
    }
  },
  methods: { // 方法定义
    isMobile() { // 判断是否为移动端的方法
      const rect = body.getBoundingClientRect() // 获取body元素的尺寸信息
      return rect.width - RATIO < WIDTH // 根据宽度判断是否为移动端
    },
    resizeHandler() { // 窗口大小改变处理函数
      if (!document.hidden) { // 如果文档未隐藏
        const isMobile = this.isMobile() // 判断是否为移动端
        store.dispatch('ToggleDevice', isMobile ? 'mobile' : 'desktop') // 切换设备类型

        if (isMobile) { // 如果是移动端
          store.dispatch('CloseSideBar', { withoutAnimation: true }) // 关闭侧边栏（无动画）
        }
      }
    }
  }
}



// 这段代码是一个Vue组件，主要功能是：
//
// 1. **监听路由变化**：当在移动端且侧边栏打开时，切换路由会自动关闭侧边栏
// 2. **响应窗口大小变化**：通过监听resize事件判断设备类型（移动端/桌面端）
// 3. **设备类型切换**：当窗口宽度小于1024px时判定为移动端，自动关闭侧边栏并更新设备状态
// 4. **初始化处理**：组件挂载时检测设备类型并相应调整界面状态
