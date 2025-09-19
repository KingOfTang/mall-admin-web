// 引入Vue核心库
import Vue from 'vue'

// 引入normalize.css重置浏览器默认样式
import 'normalize.css/normalize.css'

// 引入ElementUI组件库
import ElementUI from 'element-ui'
// 引入ElementUI默认主题样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入ElementUI中文语言包
import locale from 'element-ui/lib/locale/lang/zh-CN'
// 引入VCharts图表组件库
import VCharts from 'v-charts'

// 引入全局scss样式文件
import '@/styles/index.scss'

// 引入根组件App.vue
import App from './App'
// 引入路由配置
import router from './router'
// 引入状态管理store
import store from './store'

// 引入图标组件
import '@/icons'
// 引入权限控制模块
import '@/permission'

// 注册ElementUI插件并设置语言为中文
Vue.use(ElementUI, { locale })
// 注册VCharts图表插件
Vue.use(VCharts)

// 关闭生产环境提示
Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  // 挂载到id为app的DOM元素
  el: '#app',
  // 注入路由
  router,
  // 注入状态管理
  store,
  // 设置模板
  template: '<App/>',
  // 注册组件
  components: { App }
})




// 这段代码是Vue项目的入口文件，主要功能包括：
//
// 1. **引入依赖**：导入Vue、ElementUI组件库、VCharts图表库等
// 2. **样式导入**：引入normalize.css、ElementUI主题样式和自定义scss样式
// 3. **国际化**：设置ElementUI为中文语言
// 4. **插件注册**：注册ElementUI和VCharts插件
// 5. **权限控制**：引入权限管理模块
// 6. **实例化Vue**：创建Vue根实例，挂载到#app元素，集成路由和状态管理
//
// 整体作用是初始化Vue应用并配置相关插件和功能模块。
