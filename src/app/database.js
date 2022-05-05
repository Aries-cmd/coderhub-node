const mysql = require('mysql2');
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PORT,
  MYSQL_PASSWORD
} = require("./config")

const connections = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  database: MYSQL_DATABASE,
  port: MYSQL_PORT,
  password: MYSQL_PASSWORD
});
  
connections.getConnection((err, conn) => {
  if (err) {
    console.log("连接失败");
  } else {
    console.log("连接数据库成功");
  }
})

module.exports = connections.promise()