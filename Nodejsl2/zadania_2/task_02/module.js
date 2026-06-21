const fs = require('fs');
const path = require('path');

module.exports = function (filePath) {
  let fullPath = path.resolve(__dirname, filePath);
  let text = fs.readFileSync(fullPath, 'utf8');
  let parts = text.trim().split(/\s+/);
  let sum = 0;
  for (let i = 0; i < parts.length; i++) {
    sum += Number(parts[i]);
  }
  return sum;
};
