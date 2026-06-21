const fs = require('fs');
const path = require('path');

module.exports = function (arr) {
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    }
  }
  let filePath = path.resolve(__dirname, '../f_05/10.json');
  fs.writeFileSync(filePath, JSON.stringify(numbers), 'utf8');
  return numbers;
};
