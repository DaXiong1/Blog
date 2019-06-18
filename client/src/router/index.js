import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/article-list'
import ArticleDetail from '@/components/article-detail'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
