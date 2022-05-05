const service = require("../service/user.service")
const { md5Password } = require("../utils/handle-password")
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_INCORRENT
} = require("../constants/error-types")

const verifyAuth = async (ctx, next) => {
  // 获取用户名和密码
  const { name, password } = ctx.request.body

  // 判断用户名或密码是否为空
  if (!name || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断用户名是否存在
  const result = await service.getUserByName(name)
  const user = result[0]
  console.log(user.password);
  if (!user) {
    const error = new Error(USER_DOES_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 判断密码是否和数据库中的密码是否一致
  if (md5Password(password) !== user.password) {
    const error = new Error(PASSWORD_IS_INCORRENT)
    return ctx.app.emit('error', error, ctx)
  } else {
    next()
  }
}

module.exports = {
  verifyAuth
}