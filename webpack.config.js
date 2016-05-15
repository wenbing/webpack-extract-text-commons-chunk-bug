/* eslint no-use-before-define:0 */
'use strict';
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      {
        test: /\.gss$/,
        loaders: ExtractTextPlugin.extract('style-loader', ['css-loader']).split('!'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
    }),
  ],
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
    publicPath: 'public/',
  },
};
