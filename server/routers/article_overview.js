import {resError, resSuccess} from '../utils/responseHandler'
import { putArticle, getAllArticles } from '../controllers/article_overview'
import { putContent } from '../controllers/article_detail'
import { controller, put, del, post, get, required } from '../decorator'
import config from '../config'

@controller(`${config.APP.ROOT_PATH}/article_overview`)
export class articleOverviewController {
  // 添加文章
  @put('add')
  @required({body: ['title', 'description', 'content']})
  async addArticle (ctx) {
    const opts = ctx.request.body
    try {
      const article = await putArticle(opts)
      const optContent = {
        article_id: article,
        content: opts.content
      }
      await putContent(optContent)
      resSuccess({ctx, msg: '添加文章成功'})
    } catch (err) {
      resError({ctx, msg: '添加文章失败', err})
    }
  }

  // 获取文章集合
  @get('getAll')
  async getAllArticle (ctx) {
    try {
      const res = await getAllArticles()
      resSuccess({ ctx, msg: '获取文章列表成功', result: res })
    } catch (err) {
      resError({ctx, msg: '获取文章列表失败', err})
    }
  }
}
