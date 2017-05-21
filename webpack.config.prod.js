const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ManifestPlugin = require('webpack-manifest-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      path.resolve(ROOT_PATH, 'app/src/index')
    ],
    vendor: [
      'react',
      'react-dom',
      'grommet',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-form',
      'reselect',
      'styled-components'
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
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
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders' +
            '=1&localIdentName=[path]___[name]__[local]' +
            '___[hash:base64:5]!resolve-url-loader!postcss-loader!sass-loader'
        }),
      },
      {
        test: /\.scss$/,
        exclude: [/\.module\.scss$/],
        loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: '!css-loader!postcss-loader!sass-loader'
          }),
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "url-loader?mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=[path][name].[hash].[ext]'
      }
    ]
  },
  sassLoader: {
    includePaths: [
      './node_modules',
    ]
  },
  postcss: function () {
    return {
      defaults: [precss, autoprefixer],
      cleaner:  [autoprefixer({ browsers: [] })]
    };
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(ROOT_PATH, 'app/src/components'),
      containers: path.resolve(ROOT_PATH, 'app/src/containers'),
      pages: path.resolve(ROOT_PATH, 'app/src/pages'),
      utils: path.resolve(ROOT_PATH, 'app/src/utils'),
      root: path.resolve(__dirname, 'app/src'),
    },
  },
  output: {
    path: path.resolve(ROOT_PATH, 'server/public'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  stats: {
    chunks: true,
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: '/'
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG === 'true' || false),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    }),
    /*new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, './app/src/sw.js')
    })*/
  ]
};