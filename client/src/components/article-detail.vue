<template>
  <div class="layout">
    <Nav :type="0"></Nav>
    <div class="mainContent">
      <section>
        <div class="markdown articleDetailBox">
          <div class="title">
            <h1>{{title}}</h1>
          </div>
          <div>{{content}}</div>
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
              <i class="iconfont" v-if="true" style="color: #51ce23">&#xe63b;</i>
              <i class="iconfont" v-else>&#xe65c;</i>
              <span>100</span>人喜欢
            </div>
            <div class="view">
              <span>100</span>条评论
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Nav from './nav';
import { getArticleById } from '../api';

export default {
  name: 'article-detail',
  data () {
    return {
      title: '',
      content: ''
    };
  },
  created () {},
  mounted () {
    const pageParam = this.$route.query || {};
    const article_id = pageParam._id || '';
    if (article_id) {
      const loading = this.$loading();
      getArticleById(article_id).then(data => {
        if (data.code === 0 && data.result) {
          this.title = data.result.title;
          this.content = data.result.content;
        } else {
          this.alertErrMsg(data.msg);
        }
        loading.close();
      }).catch(err => {
        console.error(err);
        this.alertErrMsg(err);
        loading.close();
      });
    } else {
      this.alertErrMsg('没有文章ID')
    }
  },
  methods: {},
  components: {
    Nav: Nav
  }
};
</script>
