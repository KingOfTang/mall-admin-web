<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.meta.title">
        <!-- 如果是不重定向路由或者是最后一级面包屑，则显示为普通文本，否则显示为可点击的链接 -->
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1"
              class="no-redirect">{{ item.meta.title }}</span>
        <router-link v-else :to="item.redirect||item.path">{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  /**
   * Vue组件生命周期钩子函数
   * 在组件实例创建完成后立即调用
   * 用于初始化组件数据和执行初始操作
   *
   * @returns {void}
   */
  created() {
    this.getBreadcrumb()
  },

  /**
   * 组件数据初始化函数
   *
   * @returns {Object} 返回组件的初始数据对象
   * @property {null} levelList - 用于存储层级列表数据，初始值为null
   */
  data() {
    return {
      levelList: null
    }
  },

   /**
    * 路由变化监听器
    * 监听路由变化，当路由发生改变时重新获取面包屑导航数据
    * 无参数
    * 无返回值
    */
   watch: {
     $route() {
       this.getBreadcrumb()
     }
   },
  methods: {
    /**
     * 获取面包屑导航数据
     * 根据当前路由信息生成面包屑导航列表，如果当前路由不是首页，则在列表开头添加首页导航
     * @returns {void}
     */
    getBreadcrumb() {
      // 过滤出路由匹配记录中包含name属性的项
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      // 如果第一个匹配项不是首页，则在面包屑列表开头添加首页
      if (first && first.name !== 'home') {
        matched = [{path: '/home', meta: {title: '首页'}}].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
/**
 * 面包屑导航样式定义
 * 定义了面包屑组件的基本样式和交互状态样式
 */
.app-breadcrumb.el-breadcrumb {
  /*
* 设置元素为内联块级元素，用于在页面中水平排列多个块级元素
* 该样式组合常用于导航菜单、按钮组等需要并排显示的组件
*/
  display: inline-block;
  /* 设置字体大小为14像素，符合大多数网页正文文本的标准尺寸 */
  font-size: 14px;
  /*
* 设置行高为50像素，与容器高度配合实现文本垂直居中效果
* 当line-height与容器高度相等时，单行文本会在容器中垂直居中显示
*/
  line-height: 50px;
  /* 设置左外边距为10像素，用于元素间的水平间距调整 */
  margin-left: 10px;

  /**
   * 无跳转链接的面包屑项样式
   * 设置不可点击项的颜色和鼠标样式
   */
  .no-redirect {
    /* 设置文本颜色为灰色系，用于表示非激活状态的文本元素 */
    color: #97a8be;
    /* 设置鼠标悬停时显示为文本输入光标，提示用户该区域可交互 */
    cursor: text;
  }
}
</style>


<!--这段Vue代码实现了一个面包屑导航组件：-->

<!--**功能说明：**-->
<!-- - 根据当前路由动态生成面包屑路径-->
<!-- - 首页自动添加"首页"路径-->
<!-- - 支持路由变化时自动更新面包屑-->
<!-- - 末级路径和无跳转路径显示为灰色不可点击文本-->
<!-- - 其他路径显示为可点击的链接-->

<!--**核心逻辑：**-->
<!--1. `getBreadcrumb()`方法过滤路由匹配信息-->
<!--2. 通过`$route.matched`获取嵌套路由层级-->
<!--3. 使用`transition-group`实现面包屑动画效果-->
