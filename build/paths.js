const path = require('path');
const fs = require('fs');

const rootDirectory = fs.realpathSync(process.cwd());
const src = path.join(rootDirectory, 'src');

module.exports = {
  dist: path.join(rootDirectory, 'dist'),
  indexJs: path.join(src, 'index.js')
};
