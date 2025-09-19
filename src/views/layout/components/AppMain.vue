<template>
  <!-- 应用主内容区域 -->
  <section class="app-main">
    <!-- 页面切换过渡动画 -->
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <!-- 路由视图容器 -->
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
}
</script>

<!--这段Vue代码定义了一个应用主内容区域组件。主要功能包括：-->

<!--1. **结构**：使用`<section>`作为主容器，内部包含路由视图`<router-view>`-->
<!--  2. **动画**：通过`<transition>`组件为页面切换添加淡入淡出过渡效果-->
<!--    3. **路由**：显示当前路由对应的组件内容-->
<!--    4. **计算属性**：注释掉的`key`计算属性原本用于强制刷新路由组件-->

<!--    整体实现了一个带有过渡动画的路由内容展示区域。-->
