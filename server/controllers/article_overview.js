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
export const getAllArticles = async (label) => {
  let article = null
  // 按时间倒序排列
  if (label) {
    article = await ArticleOverview.find({'labels': label}).populate('labels').sort('-update_at')
  } else {
    article = await ArticleOverview.find().populate('labels').sort('-update_at')
  }
  return article
}

// 修改文章
export const updateArticleById = async (id, opts) => {
  const res = await ArticleOverview.findByIdAndUpdate(id, {$set: {title: opts.title, description: opts.description, labels: opts.labels}})
  return res
}

// 根据id获取文章
export const queryArticleById = async (id) => {
  const doc = await ArticleOverview.findById(id)
  doc.views++
  const res = doc.save()
  return res
}

// 删除文章
export const delArticleById = async (id) => {
  const res = await ArticleOverview.findByIdAndRemove(id)
  return res
}
