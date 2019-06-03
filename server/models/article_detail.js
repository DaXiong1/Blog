import mongoose from 'mongoose'

const articleDetailSchema = new mongoose.Schema({

  // 内容（markdown格式）
  content: { type: String, required: true }
})

// 注册model
const AD = mongoose.model('ArticleDetail', articleDetailSchema)

export default AD
