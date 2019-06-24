export default {
  methods: {
    alertErrMsg (message, title = '温馨提示') {
      this.$alert(message, title, {type: 'error'})
    },
    alertWarnMsg (message, title = '温馨提示') {
      this.$alert(message, title, {type: 'warning'})
    }
  }
}
