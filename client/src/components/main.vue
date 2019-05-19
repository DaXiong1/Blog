<template>
  <div class="layout">
    <header class="header navDown">
      <section class="box header-content">
        <nav>
          <a href="/">首页</a>
          <a href="/article" class="active">文章</a>
          <a href="/project" class>项目</a>
          <a href="/about" class>关于</a>
          <a href="/music" class>音乐</a>
        </nav>
        <div class="searchBox">
          <div class="search" :style="showSearch ? {paddingLeft: '5px'} : {paddingLeft: '0'}">
            <div class="text" :class="showSearch ? 'showText' : 'hiddenText'">
              <input type="text" placeholder="你心所想...">
            </div>
            <div class="searchIcon">
              <i class="iconfont" @click="toShowSearch" v-if="!showSearch">&#xe603;</i>
              <i class="iconfont rightIcon" @click="tohiddenSearch" v-else>&#xe640;</i>
            </div>
          </div>
        </div>
      </section>
    </header>
    <div id="mailContent" class="mailContent">
      <div class="articleBox">
        <main class="box main">
          <section class="article">
            <div class="item">
              <a class="article-title">
                <h2>哈哈哈，这是标题</h2>
              </a>
              <p class="article-desc">啦啦啦啦啦了，这是摘要</p>
              <div class="article-info">
                <span class="time">2019.05.18</span>
                <i class="iconfont">&#xe600;</i>
                <span class="time">
                  <strong>1</strong>次阅读
                </span>
                <i class="iconfont">&#xe600;</i>
                <span class="time">
                  <strong>1</strong>条评论
                </span>
                <i class="iconfont">&#xe600;</i>
                <span class="time">
                  <strong>1</strong>人喜欢
                </span>
              </div>
            </div>
            <div class="item">
              <a class="article-title">
                <h2>哈哈哈，这是标题</h2>
              </a>
              <p class="article-desc">啦啦啦啦啦了，这是摘要</p>
              <div class="article-info">
                <span class="time">2019.05.18</span>
                <i class="iconfont">&#xe600;</i>
                <span class="time">
                  <strong>1</strong>次阅读
                </span>
                <i class="iconfont">&#xe600;</i>
                <span class="time">
                  <strong>1</strong>条评论
                </span>
                <i class="iconfont">&#xe600;</i>
                <span class="time">
                  <strong>1</strong>人喜欢
                </span>
              </div>
            </div>
          </section>
          <section class="sideLabel">
            <div class="fixedRight">
              <div class="labels">
                <div class="title">标签</div>
                <div class="label-list">
                  <a>哈哈哈</a>
                  <a>哈哈哈</a>
                  <a>哈哈哈</a>
                  <a>哈哈哈</a>
                  <a>哈哈哈</a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div class="sideIcon">
          <i class="iconfont">&#xe654;</i>
          <i class="iconfont">&#xe638;</i>
          <i class="iconfont">&#xe635;</i>
        </div>
      </div>
      <section style="display: none;">
        <div class="markdown articleDetailBox">
          <div class="title">
            <h1>这个是标题哦</h1>
          </div>
          <div>cnncibfcbficb</div>
        </div>
        <div class="info articleDetailBox">
          <p>本文于&nbsp;2019/05/18 下午&nbsp;发布，当前已被围观&nbsp;1100&nbsp;次</p>
          <p>
            标签：
            <a href="/article" class="tagLink nuxt-link-active">dcdc</a>
          </p>
          <p>作者：大熊弋</p>
          <p>链接：https://xxx</p>
          <p>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
        </div>
        <div class="arcMata articleDetailBox" style="background: transparent">
            <div class="arcMataInfo">
                <div class="like">
                    <i class="iconfont" v-if="true"  style="color: #51ce23">&#xe63b;</i>
                    <i class="iconfont"  v-else>&#xe65c;</i>
                    <span>100</span>人喜欢
                </div>
                <div class="view"><span>100</span>条评论</div>
            </div>
        </div>
      </section>
    </div>
    <footer class="layoutFooter footerFixed">© 2019 - 大熊弋的博客</footer>
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
