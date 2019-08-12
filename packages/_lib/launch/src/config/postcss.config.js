const merge = require('deepmerge')
const {
  getVueConfig,
} = require('../utils');
const baseConfig = {
  plugins: [
    require('autoprefixer'),
    require('postcss-url')({}),
    require('postcss-import')({}),
  ]
};
module.exports = merge(baseConfig,getVueConfig('postcss.config.js'));
