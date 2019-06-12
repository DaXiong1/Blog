<template>
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
                  <th>
                    <span>标题</span>
                  </th>
                  <th>
                    <span>日期</span>
                  </th>
                  <th>
                    <span>标签</span>
                  </th>
                  <th>
                    <span>编辑</span>
                  </th>
                </tr>
              </thead>
              <tbody class="table_tbody">
                <tr class="table_row" v-for="(item,index) in articleList" :key="index">
                  <td>
                    <span class="table_row_indent"></span>
                    <a href="javascript:void(0)">{{item.title}}</a>
                  </td>
                  <td>
                    <span>{{formatDate(item.create_at, '-')}}</span>
                  </td>
                  <td>
                    <span>
                      <i style="padding-right: 15px;">xxx</i>
                      <!-- <i style="padding-right: 15px;">JavaScript</i> -->
                    </span>
                  </td>
                  <td>
                    <span>
                      <a href="javascript:void(0)" target="_brank">查看</a>
                      <div class="divider divider_vertical"></div>
                      <a href="javascript:void(0)" @click="updateArticle(item._id)">修改</a>
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
</template>

<script>
import { getAll } from '../api';

export default {
  data () {
    return {
      articleList: []
    }
  },
  created () {
    const loading = this.$loading();
    getAll()
      .then(data => {
        if (data.code === 0) {
          this.articleList = data.result || [];
        } else {
          this.alertErrMsg(data.msg);
        }
        loading.close();
      })
      .catch(err => {
        console.error(err);
        this.alertErrMsg(err);
        loading.close();
      });
  },
  methods: {
    updateArticle (_id) {
      _id && this.$router.push(`editArticle?_id=${_id}`)
    }
  }
}
</script>
