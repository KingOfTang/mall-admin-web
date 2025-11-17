<template>
  <div class="app-container">
    <!-- 筛选搜索区 -->
    <el-card class="filter-container" shadow="never">
      <div>
        <i class="el-icon-search"></i>
        <span>技术栈筛选</span>
      </div>
      <div style="margin-top: 15px">
        <el-form :inline="true" :model="listQuery" size="small" label-width="100px">
          <el-form-item label="技术类别：">
            <el-select v-model="listQuery.category" placeholder="全部" clearable>
              <el-option
                v-for="item in categoryOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="搜索技术：">
            <el-input style="width: 200px" v-model="listQuery.keyword" placeholder="技术名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleSearch" type="primary" size="small">查询</el-button>
            <el-button @click="handleReset" size="small" style="margin-left: 10px">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>

    <!-- 操作区 -->
    <el-card class="operate-container" shadow="never">
      <i class="el-icon-code"></i>
      <span>技术栈列表</span>
    </el-card>

    <!-- 表格展示区 -->
    <div class="table-container">
      <el-table
        :data="filteredList"
        style="width: 100%"
        border
        v-loading="listLoading">
        <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
        <el-table-column label="技术类别" width="150" align="center">
          <template slot-scope="scope">{{ scope.row.category }}</template>
        </el-table-column>
        <el-table-column label="技术名称" align="center">
          <template slot-scope="scope">{{ scope.row.techName }}</template>
        </el-table-column>
        <el-table-column label="官方地址" align="center">
          <template slot-scope="scope">
            <a :href="scope.row.officialUrl" target="_blank" v-if="scope.row.officialUrl">
              <el-button type="text" size="mini">访问</el-button>
            </a>
          </template>
        </el-table-column>
        <el-table-column label="描述" align="center">
          <template slot-scope="scope">{{ scope.row.description }}</template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页组件（保持风格统一，实际固定数据可隐藏） -->
    <div class="pagination-container">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="filteredList.length"
        :page-size="listQuery.pageSize"
        :current-page.sync="listQuery.pageNum"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechStackList',
  data() {
    return {
      // 筛选参数
      listQuery: {
        keyword: '',
        category: '',
        pageNum: 1,
        pageSize: 10
      },
      // 技术类别筛选选项
      categoryOptions: [
        { label: '前端框架', value: '前端框架' },
        { label: 'UI组件库', value: 'UI组件库' },
        { label: '构建工具', value: '构建工具' },
        { label: '状态管理', value: '状态管理' },
        { label: '路由管理', value: '路由管理' },
        { label: 'HTTP客户端', value: 'HTTP客户端' }
      ],
      // 原始技术栈数据（固定）
      techStackList: [
        {
          category: '前端框架',
          techName: 'Vue.js',
          officialUrl: 'https://vuejs.org/',
          description: '用于构建用户界面的渐进式JavaScript框架'
        },
        {
          category: '路由管理',
          techName: 'Vue Router',
          officialUrl: 'https://router.vuejs.org/',
          description: 'Vue.js官方路由管理器，实现组件间跳转'
        },
        {
          category: '状态管理',
          techName: 'Vuex',
          officialUrl: 'https://vuex.vuejs.org/',
          description: 'Vue.js应用程序的状态管理模式'
        },
        {
          category: 'UI组件库',
          techName: 'Element UI',
          officialUrl: 'https://element.eleme.io/',
          description: '基于Vue 2.0的桌面端组件库'
        },
        {
          category: 'HTTP客户端',
          techName: 'Axios',
          officialUrl: 'https://axios-http.com/',
          description: '用于浏览器和Node.js的HTTP客户端'
        },
        {
          category: '构建工具',
          techName: 'Webpack',
          officialUrl: 'https://webpack.js.org/',
          description: '静态模块打包工具，处理项目依赖'
        },
        {
          category: '图表库',
          techName: 'v-charts',
          officialUrl: 'https://v-charts.js.org/',
          description: '基于ECharts的Vue图表组件库'
        },
        {
          category: '样式预处理',
          techName: 'Sass/SCSS',
          officialUrl: 'https://sass-lang.com/',
          description: 'CSS预处理器，增强CSS功能'
        }
      ],
      filteredList: [], // 筛选后的数据
      listLoading: false // 加载状态
    }
  },
  created() {
    this.filteredList = this.techStackList
  },
  methods: {
    // 筛选搜索
    handleSearch() {
      this.listQuery.pageNum = 1
      this.filteredList = this.techStackList.filter(item => {
        const matchKeyword = item.techName.includes(this.listQuery.keyword) || item.description.includes(this.listQuery.keyword)
        const matchCategory = this.listQuery.category ? item.category === this.listQuery.category : true
        return matchKeyword && matchCategory
      })
    },
    // 重置筛选
    handleReset() {
      this.listQuery = {
        keyword: '',
        category: '',
        pageNum: 1,
        pageSize: 10
      }
      this.filteredList = this.techStackList
    },
    // 分页大小变更
    handleSizeChange(val) {
      this.listQuery.pageSize = val
    },
    // 页码变更
    handleCurrentChange(val) {
      this.listQuery.pageNum = val
    }
  }
}
</script>

<style scoped>
.filter-container {
  margin-bottom: 15px;
  padding: 10px 15px;
}
.operate-container {
  margin-bottom: 15px;
  padding: 10px 15px;
}
.table-container {
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
}
.pagination-container {
  text-align: right;
  margin-top: 10px;
}
</style>
