const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {
  getPort,
} = require('../utils');

const options = {
  publicPath: '/',
  clientLogLevel: 'warning',
  contentBase: false,
  historyApiFallback: true,
  hot: true,
  inline: true,
  compress: true,
  overlay: {
    warnings: false,
    errors: true
  },
  quiet: true,
  host: '0.0.0.0',
  watchOptions: {
    ignored: [/node_modules/],
    poll: true,
  },
};

module.exports = (devWebpackConfig) => {
  WebpackDevServer.addDevServerEntrypoints(devWebpackConfig, options);
  const compiler = webpack(devWebpackConfig);
  const server = new WebpackDevServer(compiler, options);
  server.listen(getPort(), 'localhost', () => {});
};