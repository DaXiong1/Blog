<template>
  <div class="app_main">
    <div class="layout">
      <Nav :type="0"></Nav>
      <div class="mainContent">
        <section>
          <div class="markdown articleDetailBox">
            <div class="title">
              <h1>{{title}}</h1>
            </div>
            <!-- <div>{{content}}</div> -->
            <mavon-editor :value="content" class="md" :subfield="false" :defaultOpen="defaultOpen" :editable="false" :toolbarsFlag="false" :ishljs="true" :scrollStyle="false" :boxShadow="false" />
          </div>
          <div class="info articleDetailBox">
            <p>本文于&nbsp;{{formatDate(create_at)}}&nbsp;发布，当前已被围观&nbsp;{{views}}&nbsp;次</p>
            <!-- <p>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p> -->
          </div>
          <!-- <div class="arcMata articleDetailBox" style="background: transparent">
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
          </div> -->
        </section>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Nav from './nav';
import Foot from './foot';
import { getArticleById } from '../api';

export default {
  name: 'article-detail',
  data () {
    return {
      title: '',
      content: '',
      create_at: '',
      defaultOpen: 'preview'
    };
  },
  created () {},
  mounted () {
    const pageParam = this.$route.query || {};
    const article_id = pageParam._id || '';
    if (article_id) {
      const loading = this.$loading();
      getArticleById(article_id).then(data => {
        const r = data.result || {}
        if (data.code === 0 && r) {
          this.title = r.title;
          this.content = r.content;
          this.create_at = r.create_at
          this.views = r.views
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
    Nav: Nav,
    Foot: Foot
  }
};
</script>

<style slot-scope>
/* markdown样式 */
.md {
  z-index: auto!important;
  color: #FFFFFF!important;
  background: none!important;
  min-height: 630px!important;
}
.v-note-panel {
    border: none!important;
}
.v-show-content {
    background: none!important;
    padding: 20px 0 0 0!important;
}
.markdown-body .highlight pre,
.markdown-body pre {
  background-color: #626262!important;
}
/* .app_main::before {
    background-image: url(http://pthq9vz1y.bkt.clouddn.com/main_bg.jpg);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 900px, #FF0000 100%, #00FF00), url(http://pthq9vz1y.bkt.clouddn.com/main_bg.jpg);
    background-size: cover;
    background-size: 100% 100%;
} */
</style>
