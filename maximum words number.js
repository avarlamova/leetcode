/**
 * @param {string[]} sentences
 * @return {number}
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence
 */
var mostWordsFound = function (sentences) {
  let max = sentences[0].split(" ").length;

  for (let i = 1; i < sentences.length; i++) {
    if (sentences[i].split(" ").length > max)
      max = sentences[i].split(" ").length;
  }
  return max;
};
