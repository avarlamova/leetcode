/**
 * @param {number} n - a positive integer
 * @return {number}
 Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 !! сложность состоит в leading zeroes
 */
var hammingWeight = function (n) {
  let arr = n.toString(2).split(""); // .toString(2) => binary
  return arr.filter((n) => parseInt(n) === 1).length;
};
