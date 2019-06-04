import {resError, resSuccess} from '../utils/resHandle'

export class articleOverviewController {
  // 添加文章
  async addArticle (ctx, next) {
    const opts = ctx.request.body
    try {
      await putArticle(opts)
      resSuccess({ctx, msg: '添加文章成功'})
    } catch (err) {
      resError({ctx, msg: '添加文章失败', err})
    }
  }
}
