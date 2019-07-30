const chalk = require('chalk');
const consola = require('consola');
const ora = require('ora');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const pkgBuild = async (pkg) => {
  const spinner = ora(`正在打包${pkg.name}项目...`).start();
  process.env.ROOT_PATH = pkg.rootPath;
  const {
    stdout,
    stderr,
  } = await exec(`node ${pkg.build}`).catch((err) => {
    consola.error(chalk.red(err));
    sp.stop();
  });
  consola.info(stdout);
  consola.info(stderr);
  spinner.succeed(chalk.cyan(`${pkg.name} 打包完成！`));
}

module.exports = (pkg) => {
  if (pkg instanceof Array) {

  } else {
    pkgBuild(pkg);
  }
}