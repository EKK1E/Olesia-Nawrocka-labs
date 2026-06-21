const fs = require('fs');
const path = require('path');

module.exports = function (folderName) {
  let folderPath = path.resolve(__dirname, folderName);
  let items = fs.readdirSync(folderPath);
  let result = {};
  for (let i = 0; i < items.length; i++) {
    let itemPath = path.join(folderPath, items[i]);
    if (fs.statSync(itemPath).isFile()) {
      result[items[i]] = fs.statSync(itemPath).size;
    }
  }
  return result;
};
