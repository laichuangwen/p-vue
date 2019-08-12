const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
  resolve,
  pkgName,
} = require('../utils');

const webpackConfig = {
  context: resolve('/'),
  entry: {
    app: ["./src/main.js"],
  },
  output: {
    filename: 'js/[name].[hash:12].js',
    path: path.resolve(process.cwd(), `dist/${pkgName()}`),
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../../node_modules'),
      resolve('/node_modules'),
      'node_modules',
    ],
    extensions: [ '.js', '.json', '.vue', '.scss' ],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '~': resolve('src/'),
      'assets': resolve('src/assets/'),
      'components': resolve('src/components/'),
      'core': resolve('src/core/'),
    }
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, '../../node_modules'),
      resolve('/node_modules'),
      'node_modules',
    ],
    extensions: [ '.js', '.json' ],
  },
  plugins: [
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
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:12].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-formatter-friendly'),
          emitWarning: true,
          configFile: path.resolve(__dirname, '.eslintrc.js'),
          failOnError: false,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname,'./babel.config.js'),
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        oneOf: [{
            resourceQuery: /module/,
            use: [{
                loader: process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                options: {
                  insertAt: 'top',
                }
              },
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]_[hash:base64:5]'
                  },
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  config: {
                    path: path.resolve(__dirname)
                  }
                }
              },
              'sass-loader',
            ]
          },
          {
            use: [{
                loader: process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                options: {
                  insertAt: 'top',
                }
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  config: {
                    path: path.resolve(__dirname)
                  }
                }
              },
              'sass-loader',
            ]
          }
        ],
      },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
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