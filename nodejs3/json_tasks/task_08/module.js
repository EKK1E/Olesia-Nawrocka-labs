const fs = require('fs');
const path = require('path');

module.exports = function () {
  let source = path.resolve(__dirname, '../f_05/01.json');
  let target = path.resolve(__dirname, '../f_05/08.json');
  let obj = JSON.parse(fs.readFileSync(source, 'utf8'));
  delete obj.os;
  fs.writeFileSync(target, JSON.stringify(obj), 'utf8');
  return obj;
};
