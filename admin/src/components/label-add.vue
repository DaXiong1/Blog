<template>
    <div class="article_edit">
        <el-input v-model="input_name" placeholder="请输入名称..." maxlength="15" show-word-limit></el-input>
        <el-input v-model="input_desc" placeholder="请输入描述..." maxlength="50" type="textarea" show-word-limit></el-input>
        <el-button type="primary" style="margin-top: 20px;position: absolute;right: 35px;" @click="save">保 存</el-button>
    </div>
</template>

<script>
import { addLabel } from '../api';

export default {
  data () {
    return {
      input_name: '',
      input_desc: ''
    }
  },
  methods: {
    save () {
      if (this.validate()) {
        const loading = this.$loading();
        const param = {
          name: this.input_name,
          description: this.input_desc
        }
        addLabel(param).then(data => {
            if (data.code === 0) {
                this.showToastSuccess('保存成功')
                setTimeout(() => {
                    this.$router.push('labelList')
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
    },
    validate () {
      if (!this.input_name) {
        this.alertWarnMsg('请输入标签标题')
        return false
      }
      if (!this.input_desc) {
        this.alertWarnMsg('请输入标签描述')
        return false
      }
      return true
    }
  }
}
</script>
