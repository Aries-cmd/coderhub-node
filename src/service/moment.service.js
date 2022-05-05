const connections = require("../app/database")

class MomentService {
  async create(userId, userContent) {
    const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?);`
    const result = await connections.execute(statement, [userContent, userId])
    return result[0]

  }

  async getMomenById(id) {
    const statement = `SELECT 
    m.id id, m.content content, m.createAt createTime, m.updateAt updateTime, 
    JSON_OBJECT('id', u.id, 'name', u.name) user
    FROM moment m 
    LEFT JOIN user u ON m.user_id = u.id WHERE m.id = ?;`
    const result = await connections.execute(statement, [id])

    return result[0]
  }

  async getMomentList(limit, size) {
    const statement = `SELECT 
    m.id id, m.content content, m.createAt createTime, m.updateAt updateTime, 
    JSON_OBJECT('id', u.id, 'name', u.name) user
    FROM moment m 
    LEFT JOIN user u ON m.user_id = u.id LIMIT ? OFFSET ?;`
    const result = await connections.execute(statement, [limit, size])

    return result
  }
}

module.exports = new MomentService()