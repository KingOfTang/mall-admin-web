<template>
  <!-- 菜单包装容器 -->
  <div class="menu-wrapper">
    <!-- 遍历路由数组，过滤掉隐藏的路由和没有子路由的项 -->
    <template v-for="item in routes" v-if="!item.hidden&&item.children">

      <!-- 如果只有一个可见子路由且不显示为子菜单 -->
      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name">
        <!-- 菜单项 -->
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <!-- 图标 -->
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <!-- 标题 -->
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <!-- 否则显示为子菜单 -->
      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <!-- 子菜单标题 -->
        <template slot="title">
          <!-- 图标 -->
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <!-- 标题 -->
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>

        <!-- 遍历子路由，过滤掉隐藏的项 -->
        <template v-for="child in item.children" v-if="!child.hidden">
          <!-- 递归渲染嵌套菜单 -->
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
          <!-- 支持外链功能 -->
          <a v-else-if="child.path.startsWith('http')" v-bind:href="child.path" target="_blank" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </a>
          <!-- 普通路由链接 -->
          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem', // 组件名称
  props: { // 组件属性
    routes: { // 路由数组
      type: Array
    },
    isNest: { // 是否为嵌套菜单
      type: Boolean,
      default: false
    }
  },
  methods: { // 组件方法
    hasOneShowingChildren(children) { // 判断是否只有一个可见子项
      const showingChildren = children.filter(item => {
        return !item.hidden // 过滤掉隐藏项
      })
      if (showingChildren.length === 1) {
        return true
      }
      return false
    }
  }
}
</script>
