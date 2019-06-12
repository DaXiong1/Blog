import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import ArticleManage from '@/components/article-manage'
import ArticleEdit from '@/components/article-edit'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/main/articles' },
    {
      path: '/main',
      component: Main,
      children: [
        {
          path: 'articles',
          component: ArticleManage
        },
        {
          path: 'editArticle',
          component: ArticleEdit
        }
      ]
    }
  ]
})
