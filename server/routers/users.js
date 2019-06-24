import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import {resError, resSuccess} from '../utils/responseHandler'
import { doLogin, doRegister } from '../controllers/users'
import { controller, post, required, put } from '../decorator'
import config from '../config'
// md5 编码
const md5Decode = str => crypto.createHash('md5').update(str).digest('hex')

@controller(`${config.APP.ROOT_PATH}/users`)
export class usersController {
  // 登录
  @post('login')
  @required({body: ['username', 'password']})
  async login (ctx) {
    const opts = ctx.request.body
    try {
      const { username, password } = opts
      const result = await doLogin(username)
      const result0 = result[0] || {}
      if (result0) {
        if (result0.password === md5Decode(password)) {
            // 登录成功,生成一个token
            const token = jwt.sign({ name: username }, config.USERMSG.secretOrPrivateKey, {
                expiresIn: 60 * 60 * 24 // 24小时过期
            });
            resSuccess({ctx, msg: '登录成功', result: { token }})
        } else {
            resError({ctx, msg: '用户名密码不匹配'})
        }
      } else {
        resError({ctx, msg: '用户不存在'})
      }
    } catch (err) {
      resError({ctx, msg: '登录失败', err})
    }
  }

  // 注册
  @put('register')
  @required({body: ['username', 'password']})
  async register (ctx) {
    const opts = ctx.request.body
    try {
      const param = {
        username: opts.username,
        password: md5Decode(opts.password)
      }
      await doRegister(param)
      resSuccess({ctx, msg: '注册成功'})
    } catch (err) {
      resError({ctx, msg: '注册失败', err})
    }
  }
}
