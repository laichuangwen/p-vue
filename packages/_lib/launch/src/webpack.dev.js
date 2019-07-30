const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const webpackConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin(),
  ]
};

module.exports = merge(baseWebpackConfig, webpackConfig);