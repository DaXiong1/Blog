import ArticleDetail from '../models/article_detail'

// 新建文章内容
export const putContent = async (opts) => {
  let content = null
  if (opts) {
    content = await (new ArticleDetail(opts)).save()
  }
  return content
}

// 根据article_id获取文章内容
export const getByArticleId = async (article_id) => {
  const res = await ArticleDetail.find({'article_id': article_id})
  return res
}
