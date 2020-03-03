const path = require('path');
const fs = require('fs');

const rootDirectory = fs.realpathSync(process.cwd());

const src = path.join(rootDirectory, 'src');
const dist = path.join(rootDirectory, 'dist');
const srcClient = path.join(src, 'client');
const srcServer = path.join(src, 'server');
const distClient = path.join(dist, 'client');
const distServer = path.join(dist, 'server');

module.exports = {
  src,
  dist,
  distClient,
  distServer,
  indexClientJs: path.join(srcClient, 'index.js'),
  indexServerJs: path.join(srcServer, 'index.js'),
  templateHtml: path.join(srcClient, 'index.html'),
  filenameHtml: path.join(distClient, 'index.html')
};
