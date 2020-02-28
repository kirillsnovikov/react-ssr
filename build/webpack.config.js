// const webpack = require('webpack')
const paths = require('./paths');

const config = {
  target: 'node',
  entry: paths.indexJs,
  output: {
    path: paths.dist,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    express: 'express'
  }
};
module.exports = config;
