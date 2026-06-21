const fs = require('fs');
const path = require('path');

module.exports = function (filePath) {
  let fullPath = path.resolve(__dirname, filePath);
  let obj = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  let names = [];
  for (let i = 0; i < obj.employees.length; i++) {
    names.push(obj.employees[i].name);
  }
  return names;
};
