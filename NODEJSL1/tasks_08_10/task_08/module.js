module.exports = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    } else if (typeof arr[i] === 'string' && !isNaN(Number(arr[i]))) {
      result.push(Number(arr[i]));
    }
  }
  return result;
};
