const fs = require('fs');
const path = require('path');

module.exports = function (sourceFile, targetFile) {
  let sourcePath = path.resolve(__dirname, sourceFile);
  let targetPath = path.resolve(__dirname, targetFile);
  let text = fs.readFileSync(sourcePath, 'utf8');
  fs.writeFileSync(targetPath, text, 'utf8');
};
