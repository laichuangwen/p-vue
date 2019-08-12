const merge = require('babel-merge');
const {
  getVueConfig,
} = require('../utils');
const base = {
  presets: [
    [require.resolve('@babel/preset-env'), {
      targets: { // 目标环境
        browsers: [ // 浏览器
          "last 2 versions",
          "ie >= 10"
        ],
        node: "current" // node
      },
      useBuiltIns: 'usage',
      corejs: 3,
    }],
  ],
  plugins: [require.resolve('@babel/plugin-transform-runtime')],
};
module.exports = merge(base, getVueConfig('babel.config.js'));