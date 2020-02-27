// const webpack = require('webpack')
const paths = require('./paths');

const config = {
  target: 'node',
  entry: paths.indexJs,
  output: {
    path: paths.dist,
    filename: '[name].[hash:5].js'
  }
};
module.exports = config;
