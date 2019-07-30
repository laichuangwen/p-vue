const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';
const {
  resolve,
  pkgName,
  getPort,
  getIp,
} = require('./utils');

const webpackConfig = {
  context: resolve(),
  entry: {
    app: ["./src/main.js"],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(process.cwd(), `dist/${pkgName()}`),
    publicPath: ASSET_PATH,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../node_modules'),
      'node_modules',
    ]
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, '../node_modules'),
      'node_modules',
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`${pkgName()} 运行地址: http://${getIp()}:${getPort()}`],
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      favicon: resolve('src/favicon.ico'),
      minify: {
        removeComments: true, // 删除注释
        collapseWhitespace: true, // 删除空格符
        removeAttributeQuotes: true, // 删除引号
      },
      hash: true, //脚本和CSS文件附加唯一的编译哈希。这对缓存清除很有用
      chunksSortMode: 'dependency' //对块进行排序
    }),
    // 公共的依赖模块提取到已有的入口 chunk 中
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称。
    })
  ],
  module: {
    rules: [{
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'img/[name].[hash:7].[ext]',
          }
        }, ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
  },
}
module.exports = webpackConfig;