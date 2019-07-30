const build = require('./build');
const devServer = require('./devServer');
const prodWebpackConfig = require('./webpack.prod');
const devWebpackConfig = require('./webpack.dev');
module.exports = {
  // 启动本地服务开发
  devServer() {
    return devServer(devWebpackConfig);
  },
  // 启动编译打包
  build() {
    return build(prodWebpackConfig);
  },
}