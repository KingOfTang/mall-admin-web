import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
/**
 * 全局注册 SVG 图标组件
 * 将 SvgIcon 组件注册为全局的 'svg-icon' 组件，可以在任何 Vue 组件中直接使用
 */
Vue.component('svg-icon', SvgIcon)

/**
 * 批量导入模块的辅助函数
 * @param {Object} requireContext - webpack 的 require.context 上下文对象
 * @returns {Array} 返回所有匹配模块的导入结果数组
 */
const requireAll = requireContext => requireContext.keys().map(requireContext)

// 创建一个 webpack require.context 上下文，用于批量导入 SVG 文件
// 参数说明：'./svg' 表示搜索目录，false 表示不递归子目录， /\.svg$/ 表示只匹配 .svg 文件
const req = require.context('./svg', false, /\.svg$/)

// 执行批量导入，将所有 SVG 文件作为模块导入到项目中
requireAll(req)




// 这段代码的功能是：
//
// 1. **导入SVG图标组件**：从`@/components/SvgIcon`导入SvgIcon组件
// 2. **全局注册组件**：使用`Vue.component()`将SvgIcon注册为全局组件`svg-icon`
// 3. **批量导入SVG文件**：通过`require.context()`获取`./svg`目录下所有`.svg`文件，并批量加载
//
// 这样就可以在项目中直接使用`<svg-icon>`标签来显示SVG图标了。
