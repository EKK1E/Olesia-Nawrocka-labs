const path = require('path');

module.exports = function (folderName) {
  return path.resolve(__dirname, folderName);
};
