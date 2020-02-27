// const webpack = require('webpack')
const paths = require('./paths');

const config = {
  target: 'node',
  entry: paths.indexJs,
  output: {
    path: paths.dist,
    filename: '[name].[hash:5].js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    express: 'express'
  }
};
module.exports = config;
