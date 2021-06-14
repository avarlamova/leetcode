/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 * The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

 

Example 1:

Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
Output: true
Explanation:
The numerical value of firstWord is "acb" -> "021" -> 21.
The numerical value of secondWord is "cba" -> "210" -> 210.
The numerical value of targetWord is "cdb" -> "231" -> 231.
We return true because 21 + 210 == 231.
 */

var isSumEqual = function (firstWord, secondWord, targetWord) {
  //creating alphabet array
  let alphabet = "abcdefghij".split("");

  function countLetters(arr) {
    let sum = "";
    arr.split("").map((el) => {
      sum += alphabet.indexOf(el);
    });
    return sum;
  }
  let firstSum = countLetters(firstWord);
  let secondSum = countLetters(secondWord);
  let targetSum = countLetters(targetWord);
  return parseInt(firstSum) + parseInt(secondSum) === parseInt(targetSum);
};
