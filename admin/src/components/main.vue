<template>
  <div class="main layout">
    <div class="layout layout_has_sider">
      <div class="layout_sider">
        <div class="layout_sider_child">
          <div class="logo"><img src="../../static/images/logo.jpeg" alt=""></div>
          <ul class="menu menu_light menu_root menu_inline">
            <li class="menu_submenu menu_submenu_inline menu_submenu_open menu_submenu_selected">
              <div class="menu_submenu_title">
                <span><i class="anticon anticon_book iconfont">&#xe604;</i>文章管理</span>
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
      <div class="layout">
        <div class="content layout_content">
          <div class="table_wrapper">
            <div class="table_wrapper_inner">
              <div class="container">
                <div class="container_table">
                  <div class="table_body">
                    <table>
                      <colgroup style="width: 322px;">
                        <col style="width: 550px; min-width: 550px;">
                        <col style="width: 200px; min-width: 200px;">
                        <col style="width: 300px; min-width: 300px;">
                        <col>
                      </colgroup>
                      <thead class="table_thead">
                        <tr>
                          <th><span>标题</span></th>
                          <th><span>日期</span></th>
                          <th><span>标签</span></th>
                          <th><span>编辑</span></th>
                        </tr>
                      </thead>
                      <tbody class="table_tbody">
                        <tr class="table_row">
                          <td><span class="table_row_indent"></span><a href="javascript:void(0)">hcbibcbcifncinfocfd</a></td>
                          <td><span>2019-06-01</span></td>
                          <td><span><i style="padding-right: 15px;">HTML</i><i style="padding-right: 15px;">JavaScript</i></span></td>
                          <td>
                            <span>
                              <a href="https://blog.naice.me/article/5c99d6ee12455e43083aabc6" target="_brank">查看</a>
                              <div class="divider divider_vertical"></div>
                              <a href="#/edite/5c99d6ee12455e43083aabc6">修改</a>
                              <div class="divider divider_vertical"></div>
                              <a href="javascript:void(0)">删除</a>
                            </span>
                          </td>
                        </tr>
                        <tr class="table_row">
                          <td><span class="table_row_indent"></span><a href="javascript:void(0)">hcbibcbcifncinfocfd</a></td>
                          <td><span>2019-06-01</span></td>
                          <td><span><i style="padding-right: 15px;">HTML</i><i style="padding-right: 15px;">JavaScript</i></span></td>
                          <td>
                            <span>
                              <a href="https://blog.naice.me/article/5c99d6ee12455e43083aabc6" target="_brank">查看</a>
                              <div class="divider divider_vertical"></div>
                              <a href="#/edite/5c99d6ee12455e43083aabc6">修改</a>
                              <div class="divider divider_vertical"></div>
                              <a href="javascript:void(0)">删除</a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
