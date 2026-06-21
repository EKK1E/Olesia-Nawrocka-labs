module.exports = function (str) {
  let trimmed = str.trim();
  return !trimmed.includes(' ');
};
