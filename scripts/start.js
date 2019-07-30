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
  // 启动项目方法
  const pkgDevServer = (pkg) => {
    consola.start(`正在启动项目：${pkg.name}`);
    execSync(`node ${pkg.devServer}`);
  }
  // yarn start 后附加了参数，快捷启动
  if (process.argv[2]) {
    const pkg = pkgs.find(pkg => pkg.port === parseInt(process.argv[2]));
    if (pkg) {
      pkgDevServer(pkg);
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
      message: '选择你要启动的项目（快捷启动 yarn start [左侧索引数字]）',
      choices,
    }]).then((answers) => {
      const pkg = pkgs.find(pkg => pkg.name === answers.name);
      pkgDevServer(pkg);
    });
  }

})();