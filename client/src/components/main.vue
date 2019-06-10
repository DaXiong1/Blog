<template>
  <div class="layout">
    <header class="header navDown">
      <section class="box header-content">
        <nav>
          <a href="javascript:void(0)" class="active">文章</a>
          <a href="javascript:void(0)">关于</a>
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
    <div id="mainContent" class="mainContent" :is="curComp" :article_id="articleId" @showArticleDetail="getArticleId"></div>
    <footer class="layoutFooter footerFixed">© 2019 - 大熊弋的博客</footer>
  </div>
</template>

<script>
import ArticleList from './article-list'
import ArticleDetail from './article-detail'
export default {
  name: 'main',
  data () {
    return {
      msg: '',
      showSearch: false,
      curComp: 'ArticleList',
      articleId: ''
    }
  },
  methods: {
    toShowSearch: function () {
      this.showSearch = true
    },
    tohiddenSearch: function () {
      this.showSearch = false
    },
    getArticleId: function (param) {
      if (param && param.article_id) {
        this.curComp = 'ArticleDetail'
        this.articleId = param.article_id
      }
    }
  },
  components: {
    ArticleList: ArticleList,
    ArticleDetail: ArticleDetail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
