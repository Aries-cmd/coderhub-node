const dotenv = require("dotenv")
const fs = require("fs")
const path = require("path")

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, 'keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, 'keys/public.key'))

dotenv.config();  // 配置全局

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PORT,
  MYSQL_PASSWORD,
} = process.env

module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY