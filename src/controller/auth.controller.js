class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body

    ctx.body = `欢迎回来-${name}`
  }
}

module.exports = new AuthController()          