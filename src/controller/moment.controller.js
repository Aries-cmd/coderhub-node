const service = require("../service/moment.service")

class MomentController {
  async create(ctx, next) {

    const { content } = ctx.request.body
    const { id } = ctx.user
    
    // 将数据插入到数据库中
    const result = await service.create(id, content)
    ctx.body = result
  }

  async detail(ctx, next) {
    const { momentId } = ctx.request.params
    const result = await service.getMomenById(momentId)
    ctx.body = result
  }

  async list(ctx, next) {
    const { limit, size } = ctx.request.query
    const result = await service.getMomentList(limit, size)
    ctx.body = result
  }
}

module.exports = new MomentController()