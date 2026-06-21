const getFileSize = require('./module');

console.log(getFileSize('./test.txt'));
console.log(getFileSize('./not_exists.txt'));
