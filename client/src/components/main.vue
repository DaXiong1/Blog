<template>
  <div class="layout">
    <header class="header navDown">
      <section class="box header-content">
        <nav>
          <a href="/" class="nuxt-link-active">首页</a>
          <a href="/article" class="nuxt-link-exact-active nuxt-link-active active">文章</a>
          <a href="/project" class="">项目</a>
          <a href="/about" class="">关于</a>
          <a href="/music" class="">音乐</a>
        </nav>
        <div class="searchBox">
          <div class="search" style="padding-left: 5px;">
            <div class="text showText">
              <input type="text" placeholder="你心所想...">
            </div>
            <div class="searchIcon">
              <i class="iconfont rightIcon"></i>
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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
