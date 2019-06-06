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

// 根据article_id修改文章内容
export const updateByArticleId = async (article_id, opts) => {
  const res = await ArticleDetail.findOneAndUpdate({'article_id': article_id}, {$set: {content: opts.content}})
  return res
}

// 根据article_id删除文章内容
export const delByArticleId = async (article_id, opts) => {
  const res = await ArticleDetail.findOneAndRemove({'article_id': article_id})
  return res
}
