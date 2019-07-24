/** 
 * 获取可运行的项目包
 */

const fs = require('fs');
const path = require('path');
module.exports = (dir) => {
  // 获取 packages 文件路径 resolve 类似执行cd指令，因为执行指令在根目录
  const pkgPath = path.resolve('packages');
  const files = fs.readdirSync(pkgPath);
  const pkgs = files.filter((f) => {
    // 过滤_lib 而且没有package.json 的files
    if (!f.includes('_lib') && fs.existsSync(path.resolve(`packages/${f}/package.json`))) {
      return true;
    }
    return false;
  }).map((file) => {
    const pkgJson = require(`../../packages/${file}/package.json`);
    const {
      port,
      name,
      description,
      author,
    } = pkgJson;
    return {
      port,
      name,
      description,
      author,
      rootPath: path.resolve('packages', file), // 项目的根目录全路径
      scriptsPath: path.resolve('packages', file, 'scripts'), // 项目的脚本全路径
      scriptsPath: path.resolve('packages', file, 'scripts'), // 项目的脚本全路径
      devServer: path.resolve('packages', file, 'scripts', 'devServer'),
      build: path.resolve('packages', file, 'scripts', 'build'),
      lint: path.resolve('packages', file, 'scripts', 'lint'),
    }
  });
  return pkgs;
}