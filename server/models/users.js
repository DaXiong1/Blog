import mongoose from 'mongoose'
import crypto from 'crypto'
import config from '../config'

const usersSchema = new mongoose.Schema({

  // 用户名
  username: { type: String, default: config.USERMSG.adminUsername },

  // 密码
  password: { type: String, default: crypto.createHash('md5').update(config.USERMSG.adminPassword).digest('hex') }
})

// 注册model
const AO = mongoose.model('User', usersSchema)

export default AO
