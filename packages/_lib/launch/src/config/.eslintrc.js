const path = require('path');
console.log(path.resolve(__dirname, './webpack.base.conf.js'));
const {
  modulePath,
} = require('../utils');
module.exports = {
  root: true,
  extends: ['plugin:vue/essential', 'airbnb-base'],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, './webpack.base.conf'),
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'no-mixed-operators': 'off',
    'max-len': [1, 200],
    'default-case': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 'off',
    'no-lonely-if': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'prefer-promise-reject-errors': 'off',
    'no-restricted-globals': ['error', 'event'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
