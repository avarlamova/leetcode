//reduce
function capitals(str) {
  let arr = str.split("");
  let result = arr.reduce(function (accumulator, item, index, arr) {
    if (item.toUpperCase() === item) {
      accumulator.push(index);
    }
    return accumulator;
  }, []);
  return result;
}

// iteration O(n)

function capitals(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.toUpperCase() === char) {
      arr.push(i);
    }
  }
  return arr;
}

// for each

function capitals(str) {
  let arr = str.split("");
  let res = [];
  arr.forEach((item, idx) => {
    if (item.toUpperCase() === item) {
      res.push(idx);
    }
  });
  return res;
}
