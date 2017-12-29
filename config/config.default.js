const path = require('path')
const fs = require('fs')
module.exports = app => {
  const exports = {}

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  }

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  }

  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  }

  exports.keys = 'lose soul, lose heart'

  exports.middleware = [
    'access',
    'errorHandler'
  ]
  // TODO：关闭 csrf，不安全的设置
  exports.security = {
    csrf: {
      enable: false
    }
  }
return exports
}
