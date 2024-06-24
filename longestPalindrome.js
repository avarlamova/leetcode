// Given a string s, return the longest 
// palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
 // 1. expand from center
//  Time complexity: O(N^2)
// The expandAroundCenter function has a time complexity of O(N), where N is the length of the input string s. This is because in the worst case, it can expand all the way to the ends of the string.
// The longestPalindrome function iterates through the characters of the string, and for each character, it may call expandAroundCenter once or twice (in the case of even-length palindromes). Therefore, the time complexity of the longestPalindrome function is O(N^2).
// So, the overall time complexity of the code is O(N^2) due to the nested loops in the longestPalindrome function.

// 🏹 Space complexity: O(1)
// The space complexity is primarily determined by the additional space used for variables and the recursive call stack.

// The expandAroundCenter function uses a constant amount of extra space, so its space complexity is O(1).
// The longestPalindrome function uses a few additional integer variables to store indices, but the space used by these variables is also constant, so its space complexity is O(1).
// The recursive calls in the expandAroundCenter function do not use significant additional space because they are tail-recursive. The stack space used by these calls is O(1).
// So, the overall space complexity of the code is O(1).

 const longestPalindrome = (s) => {
  let res = [0, 0];
  
  for (let i = 0; i < s.length; i++) {
    const currentIndices = expand(s, i, i);
    // compare the current res with the longest found by now
    if (currentIndices[1] - currentIndices[0] > res[1] - res[0]) res = currentIndices;

    // handle cases of even-length palindromes, e.g. daan
    if (i + 1 < s.length && s[i] === s[i + 1]) {
      const evenIndices = expand(s, i, i+1);
      if (evenIndices[1] - evenIndices[0] > res[1] - res[0]) res = evenIndices;
    }
  }

  return s.slice(res[0], res[1] + 1)
};

function expand(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return [l + 1, r - 1]
}


// 2. Manacher algorithm