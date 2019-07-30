console.log('main');
const yargs = require('yargs');
const {
  name,
  rootPath
} = yargs.argv;
console.log(name);
console.log(rootPath);
