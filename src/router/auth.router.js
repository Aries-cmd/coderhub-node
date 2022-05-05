const Router = require("koa-router")
const { login } = require("../controller/auth.controller")
const { verifyAuth } = require("../middleware/auth.middleware")


const authRouter = new Router({prefix: '/login'})

authRouter.post('/', verifyAuth, login)

module.exports = authRouter