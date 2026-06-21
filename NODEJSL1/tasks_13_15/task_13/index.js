const equalArray = require('./module');

console.log(equalArray([1, 2, 3], [1, 2, 3]));
console.log(equalArray([1, 2, 3], [1, 2, 4]));
console.log(equalArray([1, '2'], [1, 2]));
console.log(equalArray([true, false], [true, false]));
