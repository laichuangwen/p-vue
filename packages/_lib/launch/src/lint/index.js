const path = require('path');
const CLIEngine = require("eslint").CLIEngine;
const { resolve } = require('../utils');

const cli = new CLIEngine({
  fix: true,
  useEslintrc: false,
  configFile: path.resolve(__dirname, '../config/.eslintrc.js'),
  extensions: ['.js', '.vue'],
});

module.exports = () => {
  const report = cli.executeOnFiles([resolve('src')]);
  CLIEngine.outputFixes(report);
}
