const fs = require('fs');
const path = require('path');

module.exports = function (folderName) {
  let folderPath = path.resolve(__dirname, folderName);
  let items = fs.readdirSync(folderPath);
  let files = [];
  for (let i = 0; i < items.length; i++) {
    let itemPath = path.join(folderPath, items[i]);
    if (fs.statSync(itemPath).isFile()) {
      files.push(items[i]);
    }
  }
  return files;
};
