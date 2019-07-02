import {resError, resSuccess} from '../utils/responseHandler'
import { putLabel, updateLabelById, delLabelById, getAllLabels } from '../controllers/labels'
import { controller, put, del, post, get, required } from '../decorator'
import config from '../config'

@controller(`${config.APP.ROOT_PATH}/label`)
export class labelController {
  // 添加标签
  @put('addLabel')
  @required({body: ['name', 'description']})
  async addLabel (ctx) {
    const opts = ctx.request.body
    try {
      await putLabel(opts)
      resSuccess({ctx, msg: '添加标签成功'})
    } catch (err) {
      resError({ctx, msg: '添加标签失败', err})
    }
  }

  // 获取标签集合
  @get('getAllLabels')
  async getAllLabel (ctx) {
    try {
      const res = await getAllLabels()
      resSuccess({ ctx, msg: '获取标签列表成功', result: res })
    } catch (err) {
      resError({ctx, msg: '获取标签列表失败', err})
    }
  }

  // 根据id修改标签
  @post('updateLabel/:id')
  @required({body: ['name', 'description']})
  async updateLabelById (ctx) {
    const { id } = ctx.params
    const opts = ctx.request.body
    try {
      await updateLabelById(id, opts)
      resSuccess({ctx, msg: '修改标签成功'})
    } catch (err) {
      resError({ctx, msg: '修改标签失败', err})
    }
  }

  // 根据article_id删除文章内容
  @del('delLabel/:id') // 动态路由
  async delLabelById (ctx) {
    const { id } = ctx.params
    try {
      await delLabelById(id)
      resSuccess({ctx, msg: '删除标签成功'})
    } catch (err) {
      resError({ctx, msg: '删除标签失败', err})
    }
  }
}
