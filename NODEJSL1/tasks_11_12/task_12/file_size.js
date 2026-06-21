module.exports = function (num) {
  if (num === 0) {
    return 0;
  }
  if (num <= 999) {
    return 'B';
  }
  if (num <= 999999) {
    return 'kB';
  }
  return 'MB';
};
