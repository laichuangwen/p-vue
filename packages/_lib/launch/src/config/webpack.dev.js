const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const {
  getPort,
} = require('../utils');
const webpackConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: { //开发服务器
    hot: true,
    port: getPort(), // 端口
    progress: false, // 显示进度条 progress-bar-webpack-plugin 可以显示进度
    inline: true,
    clientLogLevel: 'warning', // 日志级别
    historyApiFallback: true, // 任意的 404 响应都可能需要被替代为 index.html
    overlay: {
      warnings: true,
      errors: true
    },
    host: '0.0.0.0',
    quiet: true, // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。 friendly-errors-webpack-plugin 可以打印
    contentBase: false,
    watchOptions: {
      ignored: [/node_modules/],
      poll: 1000, 
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
  ]
};

module.exports = merge(baseWebpackConfig, webpackConfig);