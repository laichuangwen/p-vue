import getVueConfig from '../utils.js';
module.exports = {
  presets: [
    ['@babel/preset-env', {
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
  plugins: ['@babel/plugin-transform-runtime'],
};
