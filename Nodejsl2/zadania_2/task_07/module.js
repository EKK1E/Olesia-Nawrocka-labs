const fs = require('fs');
const path = require('path');

module.exports = function (text) {
  let result = text.split('').join(' ');
  let filePath = path.resolve(__dirname, 'd_04', 't_07.dat');
  fs.writeFileSync(filePath, result, 'utf8');
};
