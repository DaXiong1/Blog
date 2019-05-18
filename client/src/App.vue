<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  /*这里必须写成@import形式，标签里面用src引入会报错*/
  @import '../static/css/init.css';
  @import '../static/css/style.scss';
  /*
    之前图片一直显示不出来就是没加这个样式，必须设置html,body,#app的height都为100%
   */
  #app {
    height:100%;
  }
</style>
