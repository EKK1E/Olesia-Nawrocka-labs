const fs = require('fs');
const path = require('path');

module.exports = function (fileName) {
  let filePath = path.resolve(__dirname, fileName);
  if (!fs.existsSync(filePath)) {
    return 0;
  }
  return fs.statSync(filePath).isFile() ? 1 : 0;
};
