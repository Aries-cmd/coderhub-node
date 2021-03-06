const connections = require("../app/database")

class UserService {

  // 创建
  async create(user) {
    const { name, password } = user
    const statement = `INSERT INTO user (name, password) VALUES (?, ?);`
    const result = await connections.execute(statement, [name, password])

    return result
  }

  // 查询用户名是否存在
  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?;`
    const result = await connections.execute(statement, [name])

    return result[0]
  }

  // 判断与数据库中的密码是否一致
  async getUserByPsd(name, psd) {
    const statement = `SELECT * FROM user WHERE name = ? AND password = ?;`
    const result = await connections.execute(statement, [name, psd])

    return result[0]
  }
}

module.exports = new UserService()