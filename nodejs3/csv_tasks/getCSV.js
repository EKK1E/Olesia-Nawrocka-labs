const fs = require('fs');
const path = require('path');

module.exports = function getCSV(filePath, options) {
  options = options || {};
  let delimiter = options.delimiter !== undefined ? options.delimiter : ';';
  let headers = options.headers !== undefined ? options.headers : true;
  let trim = options.trim === true;
  let skipEmptyLines = options.skipEmptyLines === true;

  let fullPath = path.resolve(__dirname, filePath);
  let text = fs.readFileSync(fullPath, 'utf8');
  let lines = text.split(/\r?\n/);
  if (lines.length > 0 && lines[lines.length - 1] === '') {
    lines.pop();
  }

  function parseLine(line) {
    let parts = line.split(delimiter);
    if (trim) {
      for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i].trim();
      }
    }
    return parts;
  }

  function isEmptyLine(line) {
    return line.trim() === '';
  }

  if (headers) {
    let headerNames = parseLine(lines[0]);
    let result = [];
    for (let i = 1; i < lines.length; i++) {
      if (skipEmptyLines && isEmptyLine(lines[i])) {
        continue;
      }
      let values = parseLine(lines[i]);
      let obj = {};
      for (let j = 0; j < headerNames.length; j++) {
        obj[headerNames[j]] = values[j] !== undefined ? values[j] : '';
      }
      result.push(obj);
    }
    return result;
  } else {
    let result = [];
    for (let i = 0; i < lines.length; i++) {
      if (skipEmptyLines && isEmptyLine(lines[i])) {
        continue;
      }
      result.push(parseLine(lines[i]));
    }
    return result;
  }
};
