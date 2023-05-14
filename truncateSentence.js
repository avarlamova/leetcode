/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

 
 */

//straightforward
var truncateSentence = function (s, k) {
  const sentenceArr = s.split(" ");
  return sentenceArr.splice(0, k).join(" ");
};

// truncate by space
var truncateSentence2 = function (s, k) {
  let spacesCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      spacesCount++;
    }
    if (spacesCount === k) {
      return s.slice(0, i);
    }
  }
  return s;
};
