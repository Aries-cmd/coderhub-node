const Router = require("koa-router")
const { create } = require("../controller/user.controller.js")
const { 
  verifyUser,
  handlePassword 
} = require("../middleware/user.middleware")

const userRouter = new Router({prefix: "/users"})

// 注册接口 处理逻辑不放到这里
userRouter.post("/", verifyUser, handlePassword, create)

module.exports = userRouter