import mongoose from 'mongoose'

const articleOverviewSchema = new mongoose.Schema({

  // 创建日期
  create_at: { type: Date, default: Date.now },

  // 最近更新日期
  update_at: { type: Date, default: Date.now },

  // 文章标题
  title: { type: String, required: true },

  // 描述
  description: { type: String, required: true },

  // 文章公开状态（true：公开，false：私密）
  is_public: { type: Boolean, default: true },

  // 文章状态（1：已发布，2：草稿）
  state: { type: Number, default: 1 },

  // 阅读人数
  views: { type: Number, default: 0 },

  // 评论数量
  comments: { type: Number, default: 0 },

  // 点赞人数
  likes: { type: Number, default: 0 }
})

// 注册model
const AO = mongoose.model('ArticleOverview', articleOverviewSchema)

export default AO
