const service = require("../service/user.service.js")
class UserController {
  async create(ctx, next) {
    // 获取用户请求参数
    const user = ctx.request.body
    
    // 查询数据
    const result = await service.create(user)

    // 返回数据
    ctx.body = '注册成功'
  }
}

module.exports = new UserController()