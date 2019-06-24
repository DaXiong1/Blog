import config from './config'
import mongoConnect from './mongo'
import Route from './decorator'
import path from 'path'
// const redis = require('./redis');
import middlewares from './middlewares'
const Koa = require('koa')

const app = new Koa()
// 链接数据库
mongoConnect()
// redis.connect();

// 引入中间件
middlewares(app)

const router = new Route(app, path.resolve(__dirname, './routers'))
// 初始化路由
router.init()

// 启动
app.listen(config.APP.PORT, () => {
  console.log(`Koa Run！port at ${config.APP.PORT}`)
})
