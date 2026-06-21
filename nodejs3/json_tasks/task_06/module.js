const fs = require('fs');
const path = require('path');

module.exports = function () {
  let folderPath = path.resolve(__dirname, '../f_05');
  let items = fs.readdirSync(folderPath);
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    let itemPath = path.join(folderPath, items[i]);
    if (fs.statSync(itemPath).isFile() && path.extname(items[i]) === '.json') {
      count++;
    }
  }
  return count;
};
