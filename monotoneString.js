/**
 * @param {string} s
 * @return {number}
 * A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).

You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

Return the minimum number of flips to make s monotone increasing.
 */
var minFlipsMonoIncr = function (s) {
  let result = 0;
  let count = 0;
  //If this character is '1', string will always remain monotonic
  // "0000" + "1", "0000111" + "1" or "1111" + "1".
  // What if this character is '0'?
  // We can flip it to '1' to make sure string remains monotonic.
  // We can flip all the '1's we had seen before to '0's making the string to "0000...000".
  for (const str of s) {
    if (str == "1") {
      count++;
    } else if (str == "0" && count > 0) {
      result++;
      count--;
    }
  }
  return result;
};
