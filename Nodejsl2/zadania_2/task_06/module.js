const fs = require('fs');
const path = require('path');

module.exports = function (text) {
  let filePath = path.resolve(__dirname, 'd_04', 't_06.txt');
  fs.writeFileSync(filePath, text, 'utf8');
};
