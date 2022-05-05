const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_ALREADY_EXISTS
} = require("../constants/error-types")
const service = require("../service/user.service")
const { md5Password } = require("../utils/handle-password")

// 验证处理逻辑
const verifyUser = async (ctx, next) => {
  // 获取用户名和密码
  const { name, password } = ctx.request.body

  // 判断用户名或密码不能为空
  if (!name || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户名是否存在
  const result = await service.getUserByName(name)
  if (result.length) {
    const error = new Error(USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断这次注册的用户名是没有被注册过的
  await next()
}

const handlePassword = async (ctx, next) => {
  const psd = md5Password(ctx.request.body.password)
  ctx.request.body.password = psd

  await next()
}

module.exports = {
  verifyUser,
  handlePassword
}