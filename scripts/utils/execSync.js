// 衍生一个 shell 然后在该 shell 中执行 command，并缓冲任何产生的输出
// 具体： http://nodejs.cn/api/child_process.html

module.exports = (command, option) => {
  const { execSync } = require('child_process');

  let res = '';

  try {
    res = execSync(command, {
      maxBuffer: 200 * 1024 * 1024, // stdout 或 stderr 上允许的最大字节数。如果超过限制，则子进程会被终止并且截断任何输出
      stdio: 'inherit',
      ...option,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  return res;
}