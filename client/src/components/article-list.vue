
<template>
  <div class="app_main">
    <div class="layout">
      <Nav :type="0"></Nav>
      <div class="mainContent" :style="mainContentStyle">
        <div class="articleBox">
          <main class="box main">
            <section class="article">
              <div
                class="item"
                v-for="(item,index) in articleList"
                :key="index"
                @click="getArticleDetail(item._id)"
              >
                <a class="article-title">
                  <h2>{{item.title}}</h2>
                </a>
                <p class="article-desc">{{item.description}}</p>
                <div class="article-info">
                  <span class="time">{{formatDate(item.update_at)}}</span>
                  <i class="iconfont">&#xe600;</i>
                  <span class="time">
                    <strong>{{item.views}}</strong>次阅读
                  </span>
                  <i style="margin-left: 20px;" class="iconfont">&#xe8cb;</i>
                  <span class="label" v-for="(item1,index1) in item.labels" :key="index1">
                    <strong>{{item1.name}}</strong>
                  </span>
                  <!-- <i class="iconfont">&#xe600;</i>
                <span class="time">
                  <strong>{{item.comments}}</strong>条评论
                </span>
                <i class="iconfont">&#xe600;</i>
                <span class="time">
                  <strong>{{item.likes}}</strong>人喜欢
                  </span>-->
                </div>
              </div>
            </section>
            <section class="sideLabel">
              <div class="fixedRight">
                <div class="labels">
                  <div class="title">标签</div>
                  <div class="label-list">
                    <a href="javascript:void(0)" v-for="(item,index) in labelList" :key="index" @click="getArticlesByLabel(item._id)">{{item.name}}</a>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <BackTop></BackTop>
        </div>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Nav from './nav';
import Foot from './foot';
import BackTop from './back-top';
import { getAll, getLabels } from '../api';

export default {
  name: 'article-list',
  data () {
    return {
      articleList: [],
      labelList: []
    };
  },
  mounted () {
  },
  created () {
    this.getArticles()
    getLabels()
      .then(data => {
        if (data.code === 0) {
          this.labelList = data.result || [];
        } else {
          this.alertErrMsg(data.msg);
        }
      })
      .catch(err => {
        console.error(err);
        this.alertErrMsg(err);
      });
  },
  methods: {
    getArticles (label) {
      const loading = this.$loading();
      let param = {}
      label && (param = Object.assign(param, {label}))
      getAll(param).then(data => {
        if (data.code === 0) {
          this.articleList = data.result || [];
        } else {
          this.alertErrMsg(data.msg);
        }
        loading.close();
      })
      .catch(err => {
        console.error(err);
        this.alertErrMsg(err);
        loading.close();
      });
    },
    getArticleDetail: function (_id) {
      _id && this.$router.push(`article?_id=${_id}`)
    },
    getArticlesByLabel: function (label_id) {
      label_id && this.getArticles(label_id)
    }
  },
  components: {
    Nav: Nav,
    Foot: Foot,
    BackTop: BackTop
  }
};
</script>
<style slot-scope>
/* .app_main::before {
    background-image: url(http://pthq9vz1y.bkt.clouddn.com/main_bg.jpg);
    background-size: cover;
    filter: blur(0);
} */
</style>
