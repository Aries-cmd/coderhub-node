const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION
} = require("../constants/error-types")

const errorHandle = (error, ctx) => {
  
  let message, status;

  switch (error.message) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400
      message = "用户名或密码不能为空"
      break;
    case USER_ALREADY_EXISTS:
      status = 409
      message = "用户名已存在"
      break;
    case USER_DOES_NOT_EXISTS:
      status = 400
      message = '用户名不存在'
      break;
    case PASSWORD_IS_INCORRENT:
        status = 400
        message = "密码输入错误"
        break;
    case UNAUTHORIZATION:
        status = 400
        message = "无效的 token"
        break;
    default:
      break;
  }

  ctx.status = status
  ctx.body = message
}

module.exports = {
  errorHandle
}