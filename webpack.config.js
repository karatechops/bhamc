const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
//const NpmInstallPlugin = require('npm-install-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
  devtool: 'eval',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:7272',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, './app/src'),
  ],
  output: {
    path: path.resolve(__dirname, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: path.resolve(__dirname, './app/src')
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    },
    {
      test: /\.md$/,
      loader: 'html!markdown'
    },
    {
      test: /\.svg$/,
      loader: 'babel!svg-react'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.module\.scss$/,
      loader: 'style-loader!css-loader' +
        '?modules&importLoaders=1&localIdentName=[path]' +
        '___[name]__[local]___[hash:base64:5]' +
        '!resolve-url-loader!postcss-loader!sass-loader'
    },
    {
      test: /\.scss$/,
      exclude: [/\.module\.scss$/],
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
      loader: 'url-loader?mimetype=application/font-woff'
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
      loader: 'file-loader?name=[name].[ext]'
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'file-loader?name=[path][name].[hash].[ext]'
    }
  ]
  },
  sassLoader: {
    includePaths: [
      './node_modules',
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, 'app/src/components'),
      containers: path.resolve(__dirname, 'app/src/containers'),
      images: path.resolve(__dirname, 'app/src/images'),
      pages: path.resolve(__dirname, 'app/src/pages'),
      utils: path.resolve(__dirname, 'app/src/utils'),
      root: path.resolve(__dirname, 'app/src'),
    },
  },
  postcss: function () {
    return {
      defaults: [precss, autoprefixer],
      cleaner:  [autoprefixer({ browsers: [] })]
    };
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    //new NpmInstallPlugin(),
    new HtmlwebpackPlugin({
      title: 'Scalable React Boilerplate',
      template: 'config/templates/_index.dev.html',
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
};
