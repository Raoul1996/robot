exports.static = true
// TODO: 生产环境下允许 cors，不安全的设置
exports.cors = {
  enable: true,
  package: 'egg-cors'
}

exports.reactssr = {
  enable: true,
  package: 'egg-view-react-ssr'
}
exports.validate = {
  enable: true,
  package: 'egg-validate'
}
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
  client: {
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    user: 'robot',
    // 密码
    password: 'root',
    // 数据库名
    database: 'root'
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false
}