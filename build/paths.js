const path = require('path');
const fs = require('fs');

const rootDirectory = fs.realpathSync(process.cwd());

const src = path.join(rootDirectory, 'src');
const dist = path.join(rootDirectory, 'dist');
const srcClient = path.join(src, 'client');
const srcConfig = path.join(src, 'config');
const srcDB = path.join(src, 'db');
const srcServer = path.join(src, 'server');
const distClient = path.join(dist, 'client');
const distServer = path.join(dist, 'server');

module.exports = {
  src,
  dist,
  distClient,
  distServer,
  srcConfig,
  indexClientJs: path.join(srcClient, 'index.js'),
  indexServerJs: path.join(srcServer, 'index.js'),
  templateHtml: path.join(srcClient, 'index.html'),
  filenameHtml: path.join(distClient, 'index.html'),
  models: path.join(srcServer, 'models'),
  routes: path.join(srcServer, 'routes'),
  migrations: path.join(srcDB, 'migrations'),
  seeders: path.join(srcDB, 'seeders'),
  dbConfig: path.join(srcConfig, 'db.config.js')
};
