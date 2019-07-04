<template>
  <div class="table_wrapper">
    <div class="table_wrapper_inner">
      <div class="container">
        <div class="container_table">
          <div class="table_body">
            <table>
              <colgroup style="width: 322px;">
                <col style="width: 450px; min-width: 450px;">
                <col style="width: 150px; min-width: 150px;">
                <col style="width: 450px; min-width: 450px;">
                <col>
              </colgroup>
              <thead class="table_thead">
                <tr>
                  <th>
                    <span>标题</span>
                  </th>
                  <th>
                    <span>创建日期</span>
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
                      <i v-for="(item1,index1) in item.labels" :key="index1" style="padding-right: 15px;">{{item1.name}}</i>
                    </span>
                  </td>
                  <td>
                    <span>
                      <a target="_brank" :href="'http://www.daxiong1.cn/article?_id=' + item._id">查看</a>
                      <div class="divider divider_vertical"></div>
                      <a href="javascript:void(0)" @click="updateArticle(item._id)">修改</a>
                      <div class="divider divider_vertical"></div>
                      <a href="javascript:void(0)" @click="deleteArticle(item._id)">删除</a>
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
import { getAll, delArticleById } from '../api';

export default {
  data () {
    return {
      articleList: []
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    initArticleList () {
      const loading = this.$loading();
      getAll().then(data => {
        if (data.code === 0) {
          this.articleList = data.result || [];
        } else {
          this.alertErrMsg(data.msg);
        }
        loading.close();
      }).catch(err => {
        console.error(err);
        this.alertErrMsg(err);
        loading.close();
      });
    },
    updateArticle (_id) {
      _id && this.$router.push(`editArticle?_id=${_id}`)
    },
    deleteArticle (_id) {
      this.confirmMsg('确定删除吗？', () => {
        _id && delArticleById(_id).then(data => {
          if (data.code === 0) {
            this.showToastSuccess('删除成功')
            this.initArticleList()
          } else {
            this.alertErrMsg(data.msg);
          }
        }).catch(err => {
          console.error(err);
          this.alertErrMsg(err);
        });
      })
    }
  }
}
</script>
