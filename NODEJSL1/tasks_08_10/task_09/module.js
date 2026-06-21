module.exports = function (str) {
  if (str === 'gif' || str === 'png' || str === 'jpg' || str === 'jpeg') {
    return 'image';
  }
  return false;
};
