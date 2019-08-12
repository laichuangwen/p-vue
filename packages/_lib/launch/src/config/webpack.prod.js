const webpack = require('webpack');
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { // 抽离公共的
          name: 'commons',
          chunks: "initial",
          minChunks: 2
        },
        vendor: { // 抽离第三方
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          // chunks: 'all'
          chunks: 'initial'
        }
      }
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true, // 去除 console
          },
        },
        parallel: true,
      }),
    ],
  },
  devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
module.exports = merge(baseWebpackConfig, webpackConfig);