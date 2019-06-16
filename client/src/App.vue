<template>
  <div id="app">
    <div class="app_main" :style="'background-image: url(' + IMG_LIST[imgIndex] + ');background-size: cover;'">
      <router-view/>
    </div>
    <!-- <div class="app_left"></div>
    <div class="app_right"></div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      imgIndex: 0,
      IMG_LIST: [
        'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/89/d4eeff3454cc9df157cb5c4d2ad4285dfd233b58.jpeg',
        '../../static/images/1.jpg'
      ]
    };
  },
  mounted () {
    this.imgIndex = 1
    // setInterval(() => {
    //   if (this.imgIndex === this.IMG_LIST.length) {
    //     this.imgIndex = 0
    //   } else {
    //     this.imgIndex++
    //   }
    // }, 5000)
  }
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
    display: flex;
    min-height: 100vh;
    // flex-direction: column;
    flex: 1;
    .app_main {
      flex: 1;
    }
    .app_left, .app_right {
      flex: 0 0 10em;
      background-color: #02020a;
    }
    .app_left {
      order: -1;
    }
  }
</style>
