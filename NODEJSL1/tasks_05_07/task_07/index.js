const isWhitespace = require('./isWhitespace');

console.log(isWhitespace('ab'));
console.log(isWhitespace('a b'));
console.log(isWhitespace('   ab   '));
console.log(isWhitespace('   a b   '));
