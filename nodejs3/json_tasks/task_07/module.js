const fs = require('fs');
const path = require('path');

module.exports = function () {
  let source = path.resolve(__dirname, '../f_05/01.json');
  let target = path.resolve(__dirname, '../f_05/07.json');
  let text = fs.readFileSync(source, 'utf8');
  fs.writeFileSync(target, text, 'utf8');
};
