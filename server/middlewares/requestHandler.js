import jwt from 'jsonwebtoken'
import config from '../config'

export default async (ctx, next) => {
    // 非get请求、非登录和注册请求做token校验
    const req = ctx.request || {}
    if (req.method !== 'GET' && req.path !== '/api/users/login' && req.path !== '/api/users/register') {
        const token = req.header.authorization
        const result = await verify(token)
        if (!result) {
            ctx.body = { code: -9999, message: '未登录' }
        } else {
            await next()
        }
    } else {
        await next()
    }
}

function verify (token) {
    return new Promise(resolve => {
        jwt.verify(token, config.USERMSG.secretOrPrivateKey, (err, decoded) => {
            if (err || !decoded) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}
