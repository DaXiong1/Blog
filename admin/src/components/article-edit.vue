<template>
    <div class="article_edit">
        <el-input v-model="input_title" placeholder="请输入标题..." maxlength="50" show-word-limit></el-input>
        <el-input v-model="input_desc" placeholder="请输入描述..." maxlength="100" type="textarea" show-word-limit></el-input>
        <div class="labels_select">
          <el-checkbox v-for="(item,index) in labelList" :key="index" v-model="item.checked" :label="item.name" border></el-checkbox>
        </div>
        <mavon-editor v-model="mdcontent" ref=md :ishljs="true" :boxShadow="false" :toolbars="toolbars" style="min-height: 600px;height: 600px;" @change="changeMavon" />
        <el-button type="primary" style="margin-top: 20px;position: absolute;right: 35px;" @click="save">保 存</el-button>
    </div>
</template>

<script>
import { updateArticleById, getArticleById, addArticle, getLabels } from '../api';

export default {
  data () {
    return {
      input_title: '',
      input_desc: '',
      mdcontent: '',
      type: 1, // 1:编辑文章，2：新增文章
      article_id: '', // type为1时才有值
      labelList: [], // 所有标签列表
      selectedLabels: [], // 已选中的标签列表
      toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true // 预览
      }
    }
  },
  watch: {
    '$route': 'init' // 同页面跳转会进来
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      const pageParam = this.$route.query || {};
      this.article_id = pageParam._id || '';
      if (this.article_id) {
        this.type = 1
        const loading = this.$loading();
        const labelArr = await this.getAllLabels()
        getArticleById(this.article_id).then(data => {
          if (data.code === 0 && data.result) {
            const result = data.result || {}
            this.input_title = result.title;
            this.input_desc = result.description;
            this.mdcontent = result.content;
            this.selectedLabels = result.labels || []
            this.labelList = labelArr.map(item => {
              this.selectedLabels.includes(item._id) && (item.checked = true)
              return item
            })
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
        this.input_desc = ''
        this.input_title = ''
        this.mdcontent = ''
        this.article_id = ''
        this.selectedLabels = []
        this.labelList = await this.getAllLabels()
      }
    },
    getAllLabels () {
      return new Promise((resolve) => {
        getLabels().then(data => {
          if (data.code === 0) {
            resolve(data.result || []);
          } else {
            this.alertErrMsg(data.msg);
          }
        }).catch(err => {
          console.error(err);
          this.alertErrMsg(err);
        });
      })
    },
    // value为md，render为html
    changeMavon (value, render) {
    },
    save () {
      this.selectedLabels = this.labelList.filter(value => {
        return value.checked === true
      }).map(item => {
        return item._id
      })
      if (this.validate()) {
        const loading = this.$loading();
        const param = {
          title: this.input_title,
          description: this.input_desc,
          content: this.mdcontent,
          labels: this.selectedLabels
        }
        if (this.type === 1) { // 编辑
          this.article_id && updateArticleById(this.article_id, param).then(data => {
            if (data.code === 0) {
              this.showToastSuccess('保存成功')
              setTimeout(() => {
                this.$router.push('articles')
              }, 2000)
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
              setTimeout(() => {
                this.$router.push('articles')
              }, 2000)
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
      if (this.selectedLabels.length === 0) {
        this.alertWarnMsg('请至少选择一个标签')
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
<style slot-scoped>
.labels_select {
  margin-bottom: 10px;
}
.labels_select .el-checkbox {
  margin-bottom: 10px;
}
</style>
