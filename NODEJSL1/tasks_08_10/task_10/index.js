const password = require('./password');

console.log(password('abcdefghi'));
console.log(password('abcabcabc'));
console.log(password('  abcdefghi  '));
console.log(password('12345678'));
console.log(password('123456789'));
