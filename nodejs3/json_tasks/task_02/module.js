const fs = require('fs');
const path = require('path');

module.exports = function (filePath) {
  let fullPath = path.resolve(__dirname, filePath);
  let obj = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  return obj.age > 18;
};
