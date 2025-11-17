import Vue from 'vue'
import Router from 'vue-router'

/**
 * 安装Vue Router插件
 *
 * 该函数用于将Vue Router插件注册到Vue实例中，使Vue应用具备路由功能
 *
 * @param {Object} Router - Vue Router插件对象，包含install方法用于插件注册
 *
 * @returns {void} 无返回值
 *
 * @example
 * Vue.use(Router)
 */
Vue.use(Router)


/* Layout */
/**
 * 导入布局组件模块
 *
 * 该模块用于导入应用程序的主布局组件，通常包含页面的基本结构框架，
 * 如头部、侧边栏、主要内容区域等布局元素。
 *
 * @module Layout
 * @example
 * // 在路由配置中使用布局组件
 * import Layout from '../views/layout/Layout'
 *
 * const routes = [
 *   {
 *     path: '/',
 *     component: Layout,
 *     children: [...]
 *   }
 * ]
 */
import Layout from '../views/layout/Layout'



export const constantRouterMap = [
  // 登录路由配置：定义登录页面的路由路径和组件
  // path: '/login' - 设置路由路径为/login
  // component: () => import('@/views/login/index') - 使用动态导入方式按需加载登录页面组件
  // hidden: true - 在侧边栏菜单中隐藏该路由项
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},

  // 404错误页面路由配置：定义找不到页面时的错误处理路由
  // path: '/404' - 设置路由路径为/404
  // component: () => import('@/views/404') - 使用动态导入方式按需加载404页面组件
  // hidden: true - 在侧边栏菜单中隐藏该路由项
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    // 根路径路由，匹配空路径
    path: '',
    // 使用Layout布局组件作为根组件
    component: Layout,
    // 重定向到/home路径
    redirect: '/home',
    // 路由元信息，设置菜单标题和图标
    meta: {title: '首页', icon: 'home'},
    // 子路由配置
    children: [{
      // 子路由路径为home
      path: 'home',
      // 路由名称，用于<keep-alive>缓存组件
      name: 'home',
      // 动态导入首页内容组件
      component: () => import('@/views/home/index'),
      // 子路由元信息，设置子菜单标题和图标
      meta: {title: '仪表盘', icon: 'dashboard'}
    },

    {
      // 路由名称，用于标识该路由
      name: 'document',
      // 外部链接路径，指向学习教程网站
      path: 'https://www.macrozheng.com',
      // 路由元信息，设置菜单项的标题和图标
      meta: {title: '学习教程', icon: 'document'}
    },

    {
      name: 'video',
      path: 'https://www.macrozheng.com/mall/foreword/mall_video.html',
      meta: {title: '视频教程', icon: 'video'}
    },
    ]
  }
]

export const asyncRouterMap = [
  {
    // 商品管理模块的根路由路径
    path: '/pms',
    // 使用Layout布局组件作为根组件
    component: Layout,
    // 默认重定向到商品列表页面
    redirect: '/pms/product',
    // 路由名称，用于标识该路由模块
    name: 'pms',
    // 路由元信息，设置在侧边栏显示的标题和图标
    meta: {title: '商品', icon: 'product'},

    children: [{
      // 子路由路径，对应商品列表页面
      path: 'product',
      // 路由名称，用于标识该路由
      name: 'product',
      // 动态导入商品列表页面组件
      component: () => import('@/views/pms/product/index'),
      // 路由元信息，设置页面标题和图标
      meta: {title: '商品列表', icon: 'product-list'}
    },

      {
        // 子路由路径，用于添加商品功能
        path: 'addProduct',
        // 路由名称，用于标识该路由
        name: 'addProduct',
        // 动态导入添加商品页面组件
        component: () => import('@/views/pms/product/add'),
        // 路由元信息，设置页面标题和图标
        meta: {title: '添加商品', icon: 'product-add'}
      },

      {
        path: 'updateProduct',
        name: 'updateProduct',
        component: () => import('@/views/pms/product/update'),
        meta: {title: '修改商品', icon: 'product-add'},
        hidden: true
      },
      {
        path: 'productCate',
        name: 'productCate',
        component: () => import('@/views/pms/productCate/index'),
        meta: {title: '商品分类', icon: 'product-cate'}
      },
      {
        path: 'addProductCate',
        name: 'addProductCate',
        component: () => import('@/views/pms/productCate/add'),
        meta: {title: '添加商品分类'},
        hidden: true
      },
      {
        path: 'updateProductCate',
        name: 'updateProductCate',
        component: () => import('@/views/pms/productCate/update'),
        meta: {title: '修改商品分类'},
        hidden: true
      },
      {
        path: 'productAttr',
        name: 'productAttr',
        component: () => import('@/views/pms/productAttr/index'),
        meta: {title: '商品类型', icon: 'product-attr'}
      },
      {
        path: 'productAttrList',
        name: 'productAttrList',
        component: () => import('@/views/pms/productAttr/productAttrList'),
        meta: {title: '商品属性列表'},
        hidden: true
      },
      {
        path: 'addProductAttr',
        name: 'addProductAttr',
        component: () => import('@/views/pms/productAttr/addProductAttr'),
        meta: {title: '添加商品属性'},
        hidden: true
      },
      {
        path: 'updateProductAttr',
        name: 'updateProductAttr',
        component: () => import('@/views/pms/productAttr/updateProductAttr'),
        meta: {title: '修改商品属性'},
        hidden: true
      },
      {
        path: 'brand',
        name: 'brand',
        component: () => import('@/views/pms/brand/index'),
        meta: {title: '品牌管理', icon: 'product-brand'}
      },
      {
        path: 'addBrand',
        name: 'addBrand',
        component: () => import('@/views/pms/brand/add'),
        meta: {title: '添加品牌'},
        hidden: true
      },
      {
        path: 'updateBrand',
        name: 'updateBrand',
        component: () => import('@/views/pms/brand/update'),
        meta: {title: '编辑品牌'},
        hidden: true
      }
    ]
  },
  {
    path: '/oms',
    component: Layout,
    redirect: '/oms/order',
    name: 'oms',
    meta: {title: '订单', icon: 'order'},
    children: [
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/oms/order/index'),
        meta: {title: '订单列表', icon: 'product-list'}
      },
      {
        path: 'orderDetail',
        name: 'orderDetail',
        component: () => import('@/views/oms/order/orderDetail'),
        meta: {title: '订单详情'},
        hidden:true
      },
      {
        path: 'deliverOrderList',
        name: 'deliverOrderList',
        component: () => import('@/views/oms/order/deliverOrderList'),
        meta: {title: '发货列表'},
        hidden:true
      },
      {
        path: 'orderSetting',
        name: 'orderSetting',
        component: () => import('@/views/oms/order/setting'),
        meta: {title: '订单设置', icon: 'order-setting'}
      },
      {
        path: 'returnApply',
        name: 'returnApply',
        component: () => import('@/views/oms/apply/index'),
        meta: {title: '退货申请处理', icon: 'order-return'}
      },
      {
        path: 'returnReason',
        name: 'returnReason',
        component: () => import('@/views/oms/apply/reason'),
        meta: {title: '退货原因设置', icon: 'order-return-reason'}
      },
      {
        path: 'returnApplyDetail',
        name: 'returnApplyDetail',
        component: () => import('@/views/oms/apply/applyDetail'),
        meta: {title: '退货原因详情'},
        hidden:true
      }
    ]
  },
  {
    path:'/sms',
    component: Layout,
    redirect: '/sms/coupon',
    name: 'sms',
    meta: {title: '营销', icon: 'sms'},
    children: [
      {
        path: 'flash',
        name: 'flash',
        component: () => import('@/views/sms/flash/index'),
        meta: {title: '秒杀活动列表', icon: 'sms-flash'}
      },
      {
        path: 'flashSession',
        name: 'flashSession',
        component: () => import('@/views/sms/flash/sessionList'),
        meta: {title: '秒杀时间段列表'},
        hidden:true
      },
      {
        path: 'selectSession',
        name: 'selectSession',
        component: () => import('@/views/sms/flash/selectSessionList'),
        meta: {title: '秒杀时间段选择'},
        hidden:true
      },
      {
        path: 'flashProductRelation',
        name: 'flashProductRelation',
        component: () => import('@/views/sms/flash/productRelationList'),
        meta: {title: '秒杀商品列表'},
        hidden:true
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/sms/coupon/index'),
        meta: {title: '优惠券列表', icon: 'sms-coupon'}
      },
      {
        path: 'addCoupon',
        name: 'addCoupon',
        component: () => import('@/views/sms/coupon/add'),
        meta: {title: '添加优惠券'},
        hidden:true
      },
      {
        path: 'updateCoupon',
        name: 'updateCoupon',
        component: () => import('@/views/sms/coupon/update'),
        meta: {title: '修改优惠券'},
        hidden:true
      },
      {
        path: 'couponHistory',
        name: 'couponHistory',
        component: () => import('@/views/sms/coupon/history'),
        meta: {title: '优惠券领取详情'},
        hidden:true
      },
      {
        path: 'brand',
        name: 'homeBrand',
        component: () => import('@/views/sms/brand/index'),
        meta: {title: '品牌推荐', icon: 'product-brand'}
      },
      {
        path: 'new',
        name: 'homeNew',
        component: () => import('@/views/sms/new/index'),
        meta: {title: '新品推荐', icon: 'sms-new'}
      },
      {
        path: 'hot',
        name: 'homeHot',
        component: () => import('@/views/sms/hot/index'),
        meta: {title: '人气推荐', icon: 'sms-hot'}
      },
      {
        path: 'subject',
        name: 'homeSubject',
        component: () => import('@/views/sms/subject/index'),
        meta: {title: '专题推荐', icon: 'sms-subject'}
      },
      {
        path: 'advertise',
        name: 'homeAdvertise',
        component: () => import('@/views/sms/advertise/index'),
        meta: {title: '广告列表', icon: 'sms-ad'}
      },
      {
        path: 'addAdvertise',
        name: 'addHomeAdvertise',
        component: () => import('@/views/sms/advertise/add'),
        meta: {title: '添加广告'},
        hidden:true
      },
      {
        path: 'updateAdvertise',
        name: 'updateHomeAdvertise',
        component: () => import('@/views/sms/advertise/update'),
        meta: {title: '编辑广告'},
        hidden:true
      }
    ]
  },
  {
    path:'/ums',
    component: Layout,
    redirect: '/ums/admin',
    name: 'ums',
    meta: {title: '权限', icon: 'ums'},
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/ums/admin/index'),
        meta: {title: '用户列表', icon: 'ums-admin'}
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/ums/role/index'),
        meta: {title: '角色列表', icon: 'ums-role'}
      },
      {
        path: 'allocMenu',
        name: 'allocMenu',
        component: () => import('@/views/ums/role/allocMenu'),
        meta: {title: '分配菜单'},
        hidden: true
      },
      {
        path: 'allocResource',
        name: 'allocResource',
        component: () => import('@/views/ums/role/allocResource'),
        meta: {title: '分配资源'},
        hidden: true
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/ums/menu/index'),
        meta: {title: '菜单列表', icon: 'ums-menu'}
      },
      {
        path: 'addMenu',
        name: 'addMenu',
        component: () => import('@/views/ums/menu/add'),
        meta: {title: '添加菜单'},
        hidden: true
      },
      {
        path: 'updateMenu',
        name: 'updateMenu',
        component: () => import('@/views/ums/menu/update'),
        meta: {title: '修改菜单'},
        hidden: true
      },
      {
        path: 'resource',
        name: 'resource',
        component: () => import('@/views/ums/resource/index'),
        meta: {title: '资源列表', icon: 'ums-resource'}
      },
      {
        path: 'resourceCategory',
        name: 'resourceCategory',
        component: () => import('@/views/ums/resource/categoryList'),
        meta: {title: '资源分类'},
        hidden: true
      }
    ]
  },
// 新增技术栈模块路由（与pms同级）
  {
    path: '/techStack',
    component: Layout,
    redirect: '/techStack/index',
    name: 'TechStack',
    meta: { title: '技术栈展示', icon: 'el-icon-code' },
    children: [
      {
        path: 'index',
        name: 'TechStackList',
        component: () => import('@/views/techStack/index'),
        meta: { title: '技术栈列表', icon: 'el-icon-code' }
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

/**
 * 创建并导出一个Vue Router实例
 * 该路由器配置了基本的路由行为和路由映射表
 *
 * @returns {Router} 返回配置好的Vue Router实例
 */

export default new Router({
  // mode: 'history', //后端支持可开
  /**
   * 控制路由切换时的滚动行为
   * 每次路由切换后将页面滚动到顶部
   *
   * @returns {Object} 返回滚动位置对象，设置y轴位置为0
   */
  scrollBehavior: () => ({y: 0}),
  /**
   * 路由配置映射表
   * 包含应用中所有预定义的路由规则
   */
  routes: constantRouterMap
})


