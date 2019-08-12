const path = require('path');
const MiniCssExtractPlugin = require('vue-launch/node_modules/mini-css-extract-plugin');
module.exports = {
  devServer: { //开发服务器
    port: 8086, // 端口
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              insertAt: 'top',
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(process.cwd(),'packages/_lib/launch/src/config/postcss.config.js')
              }
            }
          },
          'less-loader'
        ]
      },
    ],
  }
};