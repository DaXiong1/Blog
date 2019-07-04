import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/components/main'
import ArticleManage from '@/components/article-manage'
import ArticleEdit from '@/components/article-edit'
import LabelManage from '@/components/label-manage'
import LabelAdd from '@/components/label-add'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/main/articles' },
    {
      path: '/login',
      component: Login
    },
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
        },
        {
          path: 'labelList',
          component: LabelManage
        },
        {
          path: 'addLabel',
          component: LabelAdd
        }
      ]
    }
  ]
})
