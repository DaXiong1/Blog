import {resError, resSuccess} from '../utils/responseHandler'
import { putContent, getByArticleId, updateByArticleId, delByArticleId } from '../controllers/article_detail'
import { controller, put, del, post, get, required } from '../decorator'
import config from '../config'

@controller(`${config.APP.ROOT_PATH}/article_detail`)
export class articleDetailController {
  // 添加文章内容
  @put('add')
  @required({body: ['content']})
  async addContent (ctx) {
    const opts = ctx.request.body
    try {
      await putContent(opts)
      resSuccess({ctx, msg: '添加文章内容成功'})
    } catch (err) {
      resError({ctx, msg: '添加文章内容失败', err})
    }
  }

  // 根据article_id获取文章内容
  @get('get/:article_id') // 动态路由
  async getContentByArticleId (ctx) {
    const { article_id } = ctx.params
    try {
      const result = await getByArticleId(article_id)
      resSuccess({ctx, msg: '添加文章内容成功', result})
    } catch (err) {
      resError({ctx, msg: '查询文章内容失败', err})
    }
  }

  // 根据article_id修改文章内容
  @post('update/:article_id')
  @required({body: ['content']})
  async updateContentByArticleId (ctx) {
    const { article_id } = ctx.params
    const opts = ctx.request.body
    try {
      await updateByArticleId(article_id, opts)
      resSuccess({ctx, msg: '修改文章内容成功'})
    } catch (err) {
      resError({ctx, msg: '修改文章内容失败', err})
    }
  }

  // 根据article_id删除文章内容
  @del('del/:article_id') // 动态路由
  async delContentByArticleId (ctx) {
    const { article_id } = ctx.params
    try {
      await delByArticleId(article_id)
      resSuccess({ctx, msg: '删除文章内容成功'})
    } catch (err) {
      resError({ctx, msg: '删除文章内容失败', err})
    }
  }
}
