module.exports = function (str) {
  let trimmed = str.trim();
  if (trimmed.length <= 8) {
    return false;
  }
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed.indexOf(trimmed[i], i + 1) !== -1) {
      return false;
    }
  }
  return true;
};
