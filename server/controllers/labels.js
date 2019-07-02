import Labels from '../models/labels'

// 新建标签
export const putLabel = async (opts) => {
  let content = null
  if (opts) {
    content = await (new Labels(opts)).save()
  }
  return content
}

// 获取标签列表
export const getAllLabels = async () => {
    let res = null
    // 按时间倒序排列
    res = await Labels.find().sort('-update_at')
    return res
}

// 修改标签
export const updateLabelById = async (id, opts) => {
    const res = await Labels.findByIdAndUpdate(id, {$set: {name: opts.name, description: opts.description}})
    return res
}

// 删除标签
export const delLabelById = async (id) => {
    const res = await Labels.findByIdAndRemove(id)
    return res
}
