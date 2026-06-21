const fs = require('fs');
const path = require('path');

module.exports = function (filePath) {
  let fullPath = path.resolve(__dirname, filePath);
  let arr = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].AMOUNT;
  }
  return sum;
};
