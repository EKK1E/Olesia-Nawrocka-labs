const fs = require('fs');
const path = require('path');

module.exports = function (filePath) {
  let fullPath = path.resolve(__dirname, filePath);
  return fs.readFileSync(fullPath, 'utf8');
};
