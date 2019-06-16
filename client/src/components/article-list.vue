<template>
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
          <!-- <section class="sideLabel">
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
          </section>-->
        </main>
        <div class="sideIcon">
          <i class="iconfont">&#xe635;</i>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from './nav';
import Foot from './foot';
import { getAll } from '../api';

export default {
  name: 'article-list',
  data () {
    return {
      articleList: []
    };
  },
  created () {
    const loading = this.$loading();
    getAll()
      .then(data => {
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
  methods: {
    getArticleDetail: function (_id) {
      _id && this.$router.push(`article?_id=${_id}`)
    }
  },
  components: {
    Nav: Nav,
    Foot: Foot
  }
};
</script>
