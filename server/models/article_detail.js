import mongoose from 'mongoose'

const articleDetailSchema = new mongoose.Schema({

  // 关联的ArticleOverview表的_id，两张表一对一关系
  article_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ArticleOverview' },

  // 内容（markdown格式）
  content: { type: String, required: true }
})

// 注册model
const AD = mongoose.model('ArticleDetail', articleDetailSchema)

export default AD
