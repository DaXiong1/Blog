'use strict'
// 中间件集合
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import cors from 'koa-cors'
import requestHandler from './requestHandler'

const middlewares = (app) => {
  app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })

  app.use(cors({
    origin: true
  }))

  app.use(requestHandler)

  app.use(helmet())
  app.use(helmet.referrerPolicy({ policy: 'no-referrer-when-downgrade' }))

  app.use(bodyParser({
    jsoinLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb'
  }))

  // 404 500 过滤掉
  app.use(async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      ctx.body = { error }
    }
    if (ctx.status === 404 || ctx.status === 405) {
      ctx.body = { code: -1, msg: '无效的api请求' }
    }
  })
}

export default middlewares
