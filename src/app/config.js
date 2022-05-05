const dotenv = require("dotenv")

dotenv.config();  // 配置全局

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PORT,
  MYSQL_PASSWORD
} = process.env