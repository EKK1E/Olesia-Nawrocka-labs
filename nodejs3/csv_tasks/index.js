const getCSV = require('./getCSV');

function t02() {
  let result = getCSV('f_06/v_02.csv', { delimiter: ';', headers: true });
  console.log(result);
  return result;
}

function t03() {
  let result = getCSV('f_06/v_03.csv', { delimiter: ';', headers: true });
  console.log(result);
  return result;
}

function t04() {
  let result = getCSV('f_06/v_04.csv', { delimiter: ';', headers: false });
  console.log(result[0]);
  return result[0];
}

function t05() {
  let result = getCSV('f_06/v_05.csv', { delimiter: ';', headers: false });
  console.log(result[0]);
  return result[0];
}

function t06() {
  let result = getCSV('f_06/v_06.csv', { delimiter: ';', headers: true, skipEmptyLines: true });
  console.log(result);
  return result;
}

function t07() {
  let result = getCSV('f_06/v_07.csv', { delimiter: ';', headers: false });
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      sum += Number(result[i][j]);
    }
  }
  console.log(sum);
  return sum;
}

function t08() {
  let result = getCSV('f_06/v_08.csv', { delimiter: ';', headers: true });
  let filtered = [];
  for (let i = 0; i < result.length; i++) {
    if (result[i].email !== '') {
      filtered.push(result[i]);
    }
  }
  console.log(filtered);
  return filtered;
}

function t09() {
  let result = getCSV('f_06/v_09.csv', { delimiter: ';', headers: true, trim: true });
  console.log(result);
  return result;
}

function t10() {
  let result = getCSV('f_06/v_10.csv', { delimiter: ';', headers: true });
  console.log(result);
  return result;
}

// t02();
// t03();
// t04();
// t05();
// t06();
// t07();
// t08();
// t09();
// t10();
