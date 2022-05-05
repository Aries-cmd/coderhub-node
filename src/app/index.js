const koa = require("koa")
const bodyParser = require("koa-bodyparser")

const userRouter = require('../router/user.router')
const authRouter = require('../router/auth.router')
const { useRoutes } = require("../router/index")
const { errorHandle } = require("./error-handle")

const app = new koa()

app.use(bodyParser())

useRoutes(app)

app.on("error", errorHandle)


module.exports = app