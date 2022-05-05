const crypto = require("crypto")

const md5Password = ( psd) => {
  const md5 = crypto.createHash('md5')
  const result = md5.update(psd).digest('hex')

  return result
}

module.exports = {
  md5Password
} 