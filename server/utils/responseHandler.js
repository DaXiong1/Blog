export const resError = ({ ctx, msg = '请求失败', err = null }) => {
  ctx.body = { code: -1, msg, error: err }
}

export const resSuccess = ({ ctx, msg = '请求成功', result = null }) => {
  ctx.body = { code: 0, msg, result }
}
