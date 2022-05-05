const app = require("./app/index.js")
const { APP_PORT } = require("./app/config")
require("./app/database")

app.listen(APP_PORT, () => {
  console.log("koa server is running");
})