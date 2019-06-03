'use strict'
// 数据库模块
import glob from 'glob'
import mongoose from 'mongoose'
// import mongoosePaginate from 'mongoose-paginate'
import path from 'path'
import config from '../config'

// mongoose设置
const url = process.env.NODE_ENV === 'production' ? config.MONGODB.prouri : config.MONGODB.uri
const debuger = process.env.NODE_ENV !== 'production'

mongoose.Promise = global.Promise
mongoose.set('debug', debuger) // 开发模式

// 数据模型引入
glob.sync(path.resolve(__dirname, '../models/*.js')).forEach(require)

// 数据库
export default function () {
  mongoose.connect(url)

  mongoose.connection.on('error', error => {
    console.log('数据库连接失败!', error)
  })

  // 连接成功
  mongoose.connection.once('open', () => {
    console.log('数据库连接成功!')
    // 分页插件配置
    // mongoosePaginate.paginate.options = {
    //   limit: config.APP.LIMIT
    // }
  })

  return mongoose
}
