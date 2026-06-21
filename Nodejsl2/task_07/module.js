const path = require('path');

module.exports = function (fileName) {
  let filePath = path.resolve(__dirname, fileName);
  return path.extname(filePath);
};
