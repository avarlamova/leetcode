/**
 * @param {string[]} strs
 * @return {string}
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 */
var longestCommonPrefix = function (strs) {
  let res = "";

  const shortestWord = strs.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });

  const wordArr = shortestWord.split(""); // take the shortest word so that we iterate less

  for (let i = 0; i < wordArr.length; i++) {
    const letter = wordArr[i];

    for (let j = 0; j < strs.length; j++) {
      const letterInQuestion = strs[j][i];
      if (letterInQuestion !== letter) {
        return res;
      }
    }
    res += letter;
  }
  return res;
};
