/**
 * @param {string} s
 * @return {boolean}
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.


 */
var isPalindrome = function (s) {
  return normalize(s) === normalize(s).split("").reverse().join("");
};

const normalize = (str) => str.toLowerCase().replace(/[\W_]/g, "");
