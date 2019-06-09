<template>
  <div class="main layout">
    <div class="layout layout_has_sider">
      <div class="layout_sider">
        <div class="layout_sider_child">
          <div class="logo"><img src="../../static/images/logo.jpeg" alt=""></div>
          <ul class="menu menu_light menu_root menu_inline">
            <li class="menu_submenu menu_submenu_inline menu_submenu_open menu_submenu_selected">
              <div class="menu_submenu_title">
                <span><i class="anticon anticon_book"></i>文章管理</span>
                <i class="menu_submenu_arrow"></i>
              </div>
              <ul class="menu_sub">
                <li class="menu_item menu_item_selected">文章列表</li>
                <li class="menu_item">添加文章</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
