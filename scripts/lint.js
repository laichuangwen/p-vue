const consola = require('consola');
const chalk = require('chalk');
const ora = require('ora');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {
  execSync,
  getPkgs,
} = require('./utils');
(async () => {
  const spinner = ora('下载依赖中...\n').start();
  const {
    stdout,
    stderr,
  } = await exec('yarn bootstrap').catch((err) => {
    spinner.fail('依赖下载失败！');
  });
  if (stdout) consola.info(stdout);
  if (stderr) consola.warn(stderr);
  spinner.succeed('依赖下载完成');
  const pkgs = getPkgs();
  // lint修复方法
  const pkgLint = (pkg) => {
    consola.start(`正在lint修复项目：${pkg.name}`);
    execSync(`node ${pkg.lint}`);
  }
  // yarn start 后附加了参数，快捷启动
  if (process.argv[2]) {
    const pkg = pkgs.find(pkg => pkg.port === parseInt(process.argv[2]));
    if (pkg) {
      pkgLint(pkg);
    } else {
      consola.error('未找到该编号项目！');
    }
    return;
  } else {
    // 后面不没有端口号的
    // 利用端口排序
    const choices = pkgs.map(pkg => {
      return {
        name: `[${pkg.port}] ${pkg.description}`,
        value: pkg.name,
        port: parseInt(pkg.port),
      }
    }).sort((a, b) => a.port > b.port);
    const inquirer = require('inquirer');
    inquirer.prompt([{
      type: 'list',
      name: 'name',
      message: '选择你要lint修复的项目（快捷修复 yarn lint [左侧索引数字]）',
      choices,
    }]).then((answers) => {
      const pkg = pkgs.find(pkg => pkg.name === answers.name);
      pkgLint(pkg);
    });
  }

})();