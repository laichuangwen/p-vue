
const build = require('./build');
const devServer = require('./devServer');

module.exports = {
  // 启动本地服务开发
  devServer(config) {
    return devServer(config);
  },
  // 启动编译打包
  build(config) {
    return build(config);
  },
}