const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const {
  pkgName,
  getIp,
} = require('../utils');
module.exports = (devWebpackConfig) => {
  // 如果你通过 Node.js API 来使用 dev-server， devServer 中的选项将被忽略。
  const devServerOptions = Object.assign({}, devWebpackConfig.devServer);
  devWebpackConfig.plugins.push(new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
      messages: [`${pkgName()} 运行地址: http://${getIp()}:${devServerOptions.port}`],
    },
  }));
  console.log(devWebpackConfig.module);
  const compiler = webpack(devWebpackConfig);
  const server = new WebpackDevServer(compiler, devServerOptions);
  server.listen(devServerOptions.port, devServerOptions.host, () => {});
};