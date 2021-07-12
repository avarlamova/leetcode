/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0*/

//solution 1
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let max = Math.pow(2, 31) - 1;
  let min = -Math.pow(2, 31);

  let arr = x.toString().split("");
  let isNegative = false;

  if (arr[0] == "-") isNegative = true;

  let res;

  if (isNegative) {
    res = "-";
    res += arr.slice(1).reverse().join("");
  } else res = arr.reverse().join("");

  if (Number(res) >= max || Number(res) <= min) return 0;

  return res;
};

//solution 2
var reverse = function (x) {
  x = x.toString().split("").reverse().join("");
  x = x > 0 ? parseInt(x) : -parseInt(x);
  if ((-2) ** 31 < x && x < 2 ** 31) {
    return x;
  }
  return 0;
};
