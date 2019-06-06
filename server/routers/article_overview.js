import {resError, resSuccess} from '../utils/responseHandler'
import { putArticle, getAllArticles, updateArticleById, delArticleById, queryArticleById } from '../controllers/article_overview'
import { putContent, updateContentByArticleId, delContentByArticleId, getContentByArticleId } from '../controllers/article_detail'
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

  // 根据id获取文章
  @get('get/:id')
  async getArticleById (ctx) {
    try {
      const {id} = ctx.params
      let res = await queryArticleById(id)
      const res1 = await getContentByArticleId(id)
      const content = res1 && res1.length > 0 && res1[0] && res1[0].content
      //   res.content = content
      resSuccess({ ctx, msg: '获取文章成功', result: Object.assign({content}, res) })
    } catch (err) {
      resError({ctx, msg: '获取文章失败', err})
    }
  }

  // 编辑文章
  @post('update/:id')
  @required({body: ['title', 'description', 'content']})
  async updateArticle (ctx) {
    const opts = ctx.request.body
    const id = ctx.params
    try {
      await updateArticleById(id, opts)
      await updateContentByArticleId(id, opts)
      resSuccess({ctx, msg: '修改文章成功'})
    } catch (err) {
      resError({ctx, msg: '修改文章失败', err})
    }
  }

  // 删除文章
  @del('del/:id')
  async delArticle (ctx) {
    const id = ctx.params
    try {
      await delArticleById(id)
      await delContentByArticleId(id)
      resSuccess({ctx, msg: '删除文章成功'})
    } catch (err) {
      resError({ctx, msg: '删除文章失败', err})
    }
  }
}
