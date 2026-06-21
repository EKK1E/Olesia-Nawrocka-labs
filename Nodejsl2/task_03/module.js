const fs = require('fs');
const path = require('path');

module.exports = function (folderName) {
  let folderPath = path.resolve(__dirname, folderName);
  if (!fs.existsSync(folderPath)) {
    return false;
  }
  return fs.statSync(folderPath).isDirectory();
};
