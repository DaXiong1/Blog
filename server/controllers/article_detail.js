import ArticleDetail from '../models/article_detail'

// 新建文章内容
export const putContent = async (opts) => {
  let content = null
  if (opts) {
    content = await (new ArticleDetail(opts)).save()
  }
  return content
}
