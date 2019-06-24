export default {
  methods: {
    alertErrMsg (message, title = '温馨提示') {
      this.$alert(message, title, {type: 'error'})
    },
    alertWarnMsg (message, title = '温馨提示') {
      this.$alert(message, title, {type: 'warning'})
    },
    showToastSuccess (message) {
      this.$message({message, center: true, type: 'success'});
    },
    confirmMsg (msg, callback, title = '温馨提示', confirmButtonText = '确定', cancelButtonText = '取消', type = 'info') {
      this.$confirm(msg, title, {
        confirmButtonText,
        cancelButtonText,
        type
      }).then(() => {
        callback()
      }).catch(() => {
      });
    }
  }
}
