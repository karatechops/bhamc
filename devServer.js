/* eslint-disable */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const env = require('node-env-file');
const path = require('path');

env(path.join(__dirname, '.env'));

const serverUrl = process.env.BASE_URL || 'http://localhost:1337';
const PORT = serverUrl.match(/\d+/g)[0];
const IP = serverUrl.match(/\w+/g)[1];

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: path.join(__dirname, 'app/build'),
}).listen(PORT, IP, function (err, result) {
  if (err) { return console.log(err); }
  console.log(`Listening at ${IP}:${PORT}`);
});
