const fs = require('fs');
const path = require('path');

module.exports = function (filePath) {
  if (path.extname(filePath) !== '.json') {
    return null;
  }
  try {
    let fullPath = path.resolve(__dirname, filePath);
    let text = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(text);
  } catch (e) {
    return null;
  }
};
