const fs = require('fs');
const path = require('path');
const babelrc = fs.readFileSync(path.join(__dirname, '../.babelrc'));
let config = {};

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==> ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-register')(config);
require('babel-polyfill');
require('./app.js');
