const webpack = require('webpack');
module.exports = (prodWebpackConfig) => {
  console.log(process.env.NODE_ENV);
  
  webpack(prodWebpackConfig, (err, status) => {
    if (err) throw err;
    process.stdout.write(status.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');
  });
};