<template>
    <div class="article_edit">
        <el-input v-model="input_title" placeholder="请输入标题..." maxlength="50" show-word-limit></el-input>
        <el-input v-model="input_desc" placeholder="请输入描述..." maxlength="100" type="textarea" show-word-limit></el-input>
        <mavon-editor v-model="mdcontent" ref=md :ishljs="true" :boxShadow="false" style="min-height: 600px;height: 600px;" @change="changeMavon" />
        <el-button type="primary" style="margin-top: 20px;position: absolute;right: 35px;" @click="save">保 存</el-button>
    </div>
</template>

<script>
import { updateArticleById, getArticleById, addArticle } from '../api';

export default {
  data () {
    return {
      input_title: '',
      input_desc: '',
      mdcontent: '',
      type: 1, // 1:编辑文章，2：新增文章
      article_id: '' // type为1时才有值
    }
  },
  mounted () {
    const pageParam = this.$route.query || {};
    this.article_id = pageParam._id || '';
    if (this.article_id) {
      this.type = 1
      const loading = this.$loading();
      getArticleById(this.article_id).then(data => {
        if (data.code === 0 && data.result) {
          const result = data.result || {}
          this.input_title = result.title;
          this.input_desc = result.description;
          this.mdcontent = result.content;
        } else {
          this.alertErrMsg(data.msg);
        }
        loading.close();
      }).catch(err => {
        console.error(err);
        this.alertErrMsg(err);
        loading.close();
      });
    } else {
      this.type = 2
    }
  },
  methods: {
    // value为md，render为html
    changeMavon (value, render) {
    },
    save () {
      if (this.validate()) {
        const loading = this.$loading();
        const param = {
          title: this.input_title,
          description: this.input_desc,
          content: this.mdcontent
        }
        if (this.type === 1) { // 编辑
          this.article_id && updateArticleById(this.article_id, param).then(data => {
            if (data.code === 0) {
              this.showToastSuccess('保存成功')
            } else {
              this.alertErrMsg(data.msg || data.error.message);
            }
            loading.close();
          }).catch(err => {
            console.error(err);
            this.alertErrMsg(err);
            loading.close();
          });
        } else if (this.type === 2) { // 新增
          addArticle(param).then(data => {
            if (data.code === 0) {
              this.showToastSuccess('保存成功')
            } else {
              this.alertErrMsg(data.msg || data.error.message);
            }
            loading.close();
          }).catch(err => {
            console.error(err);
            this.alertErrMsg(err);
            loading.close();
          });
        }
      }
    },
    validate () {
      if (!this.input_title) {
        this.alertWarnMsg('请输入文章标题')
        return false
      }
      if (!this.input_desc) {
        this.alertWarnMsg('请输入文章描述')
        return false
      }
      if (!this.mdcontent) {
        this.alertWarnMsg('请输入文章内容')
        return false
      }
      return true
    }
  }
}
</script>
