const fs = require('fs');
const path = require('path');

module.exports = function (filePath) {
  let fullPath = path.resolve(__dirname, filePath);
  let text = fs.readFileSync(fullPath, 'utf8');
  let firstLine = text.split('\n')[0].trim();
  return firstLine.split(' ');
};
