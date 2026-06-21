const fs = require('fs');
const path = require('path');

module.exports = function (filePath) {
  let fullPath = path.resolve(__dirname, filePath);
  let text = fs.readFileSync(fullPath, 'utf8');
  return text.replace(/  +/g, ' ');
};
