<template>
    <div class="article_edit">
        <el-input v-model="input_title" placeholder="请输入标题..." maxlength="50" show-word-limit></el-input>
        <el-input v-model="input_desc" placeholder="请输入描述..." maxlength="100" type="textarea" show-word-limit></el-input>
        <mavon-editor v-model="content" :boxShadow="false" style="min-height: 600px;"/>
        <el-button type="primary" style="margin-top: 20px;position: absolute;right: 35px;" @click="save">保 存</el-button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      input_title: '',
      input_desc: '',
      content: ''
    }
  },
  methods: {
    save () {
      console.log(this.content)
    }
  }
}
</script>
