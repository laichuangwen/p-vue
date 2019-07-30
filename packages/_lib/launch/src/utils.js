const path = require('path');
const fs = require('fs');
const yargs = require('yargs');
const {
  port,
  name,
  rootPath,
} = yargs.argv;
module.exports = {
  resolve(dir) {
    // 不传返回 rootPath
    if(!dir) return rootPath;
    // 传值 判断该文件是否存在，存在返回路径
    if (fs.existsSync(path.join(rootPath, dir))) return path.join(rootPath, dir);
    return '';
  },
  pkgName() {
    // 读取包的项目名
    if(name) return name;
    return '';
  },
  getPort() {
    if(port) return port;
    return '';
  },
  // 读取ip
  getIp () {
    const interfaces = require('os').networkInterfaces();
    for (let devName in interfaces) {
      for (let alias of interfaces[devName]) {
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    }
  }
}