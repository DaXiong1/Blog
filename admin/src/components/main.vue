<template>
  <div class="main layout">
    <div class="layout layout_has_sider">
      <div class="layout_sider">
        <div class="layout_sider_child">
          <div class="logo"><img src="http://pthq9vz1y.bkt.clouddn.com/logo.jpeg" alt=""></div>
          <el-menu
            default-active="articles"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect">
            <el-submenu index="articleManage">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>文章管理</span>
              </template>
              <!-- <el-menu-item-group> -->
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="articles">文章列表</el-menu-item>
                <el-menu-item index="editArticle">添加文章</el-menu-item>
              <!-- </el-menu-item-group> -->
            </el-submenu>
          </el-menu>
        </div>
      </div>
      <div class="layout">
        <div class="content layout_content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'main',
  data () {
    return {
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {},
    handleSelect (index) {
      this.$router.push(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
