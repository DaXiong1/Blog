import ArticleOverview from '../models/article_overview'

// 新建文章
export const putArticle = async (opts) => {
  let article = null
  if (opts) {
    article = await (new ArticleOverview(opts)).save()
  }
  return article
}

// 获取文章列表
export const getAllArticles = async (opts) => {
  let article = null
  if (opts) {
    article = await ArticleOverview(opts).find()
  }
  return article
}
