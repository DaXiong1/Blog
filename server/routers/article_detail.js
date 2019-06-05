import {resError, resSuccess} from '../utils/responseHandler'
import { putContent } from '../controllers/article_detail'

export class articleDetailController {
  // 添加文章内容
  async addContent (ctx) {
    const opts = ctx.request.body
    try {
      await putContent(opts)
      resSuccess({ctx, msg: '添加文章内容成功'})
    } catch (err) {
      resError({ctx, msg: '添加文章内容失败', err})
    }
  }
}
