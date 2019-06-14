import Users from '../models/users'

// 登录
export const doLogin = async (username) => {
  const res = await Users.find({ username })
  return res
}

// 注册
export const doRegister = async (opts) => {
  const res = await (new Users(opts)).save()
  return res
}
