const fs = require('fs');
const path = require('path');

module.exports = function (obj) {
  let filePath = path.resolve(__dirname, '../f_05/09.json');
  fs.writeFileSync(filePath, JSON.stringify(obj), 'utf8');
  return obj;
};
