<template>
  <div class="layout">
    <header class="header navDown">
      <section class="box header-content">
        <nav>
          <a href="/">首页</a>
          <a href="/article" class="active">文章</a>
          <a href="/project" class="">项目</a>
          <a href="/about" class="">关于</a>
          <a href="/music" class="">音乐</a>
        </nav>
        <div class="searchBox">
          <div class="search" :style="showSearch ? {paddingLeft: '5px'} : {paddingLeft: '0'}">
            <div class="text" :class="showSearch ? 'showText' : 'hiddenText'">
              <input type="text" placeholder="你心所想...">
            </div>
            <div class="searchIcon">
              <i class="iconfont" @click="toShowSearch" v-if="!showSearch">&#xe603;</i><i class="iconfont rightIcon" @click="tohiddenSearch" v-else>&#xe640;</i>
            </div>
          </div>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: '',
      showSearch: false
    }
  },
  methods: {
    toShowSearch: function () {
      this.showSearch = true
    },
    tohiddenSearch: function () {
      this.showSearch = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
