/**
 * @param {string} s
 * @return {number}
 * Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.


 */
var lengthOfLastWord = function (str) {
  const arr = str.split(" ").filter((el) => el !== "");
  return arr[arr.length - 1].length;
};
