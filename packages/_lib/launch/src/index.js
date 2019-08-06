const merge = require('webpack-merge');
const build = require('./build');
const devServer = require('./devServer');
const prodWebpackConfig = require('./config/webpack.prod');
const devWebpackConfig = require('./config/webpack.dev');
const {
  getVueConfig,
} = require('./utils');
module.exports = {
  // 启动本地服务开发
  devServer() {
    return devServer(merge(devWebpackConfig, getVueConfig()));
  },
  // 启动编译打包
  build() {
    return build(prodWebpackConfig);
  },
}