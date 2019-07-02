import mongoose from 'mongoose'

const labelsSchema = new mongoose.Schema({

  // 标签名称
  name: { type: String, required: true },

  // 描述
  description: { type: String, required: true },

  // 最近更新日期
  update_at: { type: Date, default: Date.now }
})

// 添加钩子，更新时间
labelsSchema.pre('findOneAndUpdate', function (next) {
    try {
        this.findOneAndUpdate({}, { update_at: Date.now() })
    } catch (err) {
        console.error(err)
    }
    next()
})

// 注册model
const L = mongoose.model('Labels', labelsSchema)

export default L
