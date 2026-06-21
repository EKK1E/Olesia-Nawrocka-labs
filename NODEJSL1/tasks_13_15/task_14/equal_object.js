module.exports = function (obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
