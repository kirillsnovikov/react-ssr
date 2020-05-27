// const webpack = require('webpack')
// const paths = require('./paths');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
import { paths } from './paths';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

const {
  src,
  distClient,
  distServer,
  indexServerJs,
  indexClientJs,
  templateHtml,
  filenameHtml,
} = paths;

const clientConfig = {
  context: src,
  target: 'web',
  entry: {
    client: indexClientJs,
  },
  output: {
    path: distClient,
    filename: '[name].[hash:5].js',
    publicPath: '/assets/client/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SSR React',
      template: templateHtml,
      filename: filenameHtml,
    }),
  ],
};

const serverConfig = {
  context: src,
  target: 'node',
  entry: indexServerJs,
  output: {
    path: distServer,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/assets/server/',
  },
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
};
export = [serverConfig, clientConfig];
