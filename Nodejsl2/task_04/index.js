const fileExists = require('./module');

console.log(fileExists('./test.txt'));
console.log(fileExists('./not_exists.txt'));
