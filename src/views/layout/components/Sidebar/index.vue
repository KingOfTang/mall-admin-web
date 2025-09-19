<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'sidebar',
      'routers'
    ]),
    routes() {
      // return this.$router.options.routes
      return this.routers
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>


<!--这段代码实现了一个可折叠的侧边栏菜单组件。主要功能包括：-->

<!--1. 使用`el-menu`组件创建垂直菜单，通过`isCollapse`控制折叠状态-->
<!--2. 从Vuex获取路由配置和侧边栏状态-->
<!--3. `sidebar-item`组件递归渲染菜单项-->
<!--4. `scroll-bar`组件为菜单添加滚动功能-->
<!--5. 菜单高亮当前路由路径对应的项-->
