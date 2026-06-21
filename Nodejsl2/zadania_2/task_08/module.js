const fs = require('fs');
const path = require('path');

module.exports = function (arr) {
  let content = arr.join('\r\n');
  let filePath = path.resolve(__dirname, 'd_04', 't_08.txt');
  fs.writeFileSync(filePath, content, 'utf8');
};
