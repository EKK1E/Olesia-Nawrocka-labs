const fs = require('fs');
const path = require('path');

module.exports = function (arr) {
  let lines = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      lines.push(arr[i].join(' '));
    } else {
      lines.push(arr[i]);
    }
  }
  let content = lines.join('\r\n');
  let filePath = path.resolve(__dirname, 'd_04', 't_09.txt');
  fs.writeFileSync(filePath, content, 'utf8');
};
