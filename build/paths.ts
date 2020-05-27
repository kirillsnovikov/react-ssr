import * as path from 'path';
import * as fs from 'fs';

// const path = require('path');
// const fs = require('fs');

const rootDirectory = fs.realpathSync(process.cwd());

const src = path.join(rootDirectory, 'src');
const dist = path.join(rootDirectory, 'dist');
const srcClient = path.join(src, 'client');
const srcConfig = path.join(src, 'config');
const srcServer = path.join(src, 'server');
const srcDB = path.join(srcServer, 'db');
const distClient = path.join(dist, 'client');
const distServer = path.join(dist, 'server');

export const paths = {
  src,
  dist,
  distClient,
  distServer,
  srcConfig,
  indexClientJs: path.join(srcClient, 'index.tsx'),
  indexServerJs: path.join(srcServer, 'index.ts'),
  templateHtml: path.join(srcClient, 'index.html'),
  filenameHtml: path.join(distClient, 'index.html'),
  models: path.join(srcServer, 'models'),
  routes: path.join(srcServer, 'routes'),
  migrations: path.join(srcDB, 'migrations'),
  seeders: path.join(srcDB, 'seeders'),
};
