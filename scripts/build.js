process.env.NODE_ENV = 'production';
const chalk = require('chalk');
const consola = require('consola');
const ora = require('ora');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const {
  execSync,
  pkgBuild,
  getPkgs,
} = require('./utils');
(async () => {
  const spinner = ora('下载依赖中...\n').start();
  const {
    stdout,
    stderr
  } = await exec('yarn bootstrap').catch((err) => {
    spinner.fail('依赖下载失败！');
  });
  if (stdout) consola.info(stdout);
  if (stderr) consola.warn(stderr);
  spinner.succeed('依赖下载完成');
  const pkgs = getPkgs();
  // yarn build 后附加了参数，快捷打包
  if (process.argv[2]) {
    const pkg = pkgs.find(pkg => pkg.port === parseInt(process.argv[2]));
    if (pkg) {
      const spinner = ora(`正在打包${pkg.name}项目... \n \n`).start();
      exec(`node ${pkg.build}`)
      .then(({stdout,stderr}) => {
        console.log(stdout);
        console.log(stderr);
        spinner.succeed(chalk.cyan(`${pkg.name} 打包完成！`));
      }).catch((err) => {
        console.log(err);
        console.error(chalk.red(err.stdout));
        spinner.stop();
      });
    } else {
      consola.error(chalk.yellow('未找到该编号项目！'));
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
      type: 'checkbox',
      name: 'name',
      message: '选择你要编译打包的项目（快捷生成 yarn build [左侧索引数字]）',
      choices,
    }]).then((answers) => {
      const buildPkgs = pkgs.filter(pkg => answers.name.includes(pkg.name));
      consola.start(`打包项目列表(${buildPkgs.length}个)：`);
      buildPkgs.forEach((pkg) => {
        consola.info(`${pkg.name}：${pkg.description}`);
      });
      const spinner = ora(`正在打包项目中... \n`).start();
      Promise.all(buildPkgs.map(item => exec(`node ${item.build}`)))
        .then((res) => {
          res.forEach((item) => {
            if (item.stdout) console.log(item.stdout);
            if (item.stderr) console.error(`${chalk.red(item.stderr)}`);
          });
          spinner.succeed('全部打包成功！');
          console.log(chalk.yellow(
            '  Tip: 构建的文件需要通过HTTP服务启动.\n' +
            '  直接打开 index.html 在 file:// 没有作用.\n'
          ));
        }).catch((err) => {
          consola.error(err);
          spinner.fail('打包失败！');
        });
    });
  }

})();