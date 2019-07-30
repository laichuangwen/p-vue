const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJSPlugin({
      parallel: true
    }),
  ],
}
module.exports = merge(baseWebpackConfig, webpackConfig);