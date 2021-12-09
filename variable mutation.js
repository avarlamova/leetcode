/**
 * @param {string[]} operations
 * @return {number}
 * There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "--X":
      case "X--":
        x = x - 1;
        break;
      case "++X":
      case "X++":
        x = x + 1;
        break;
      default:
        return x;
    }
  }
  return x;
};

// variant 2
function finalValueAfterOperations(operations) {
  let x = 0;
  operations.forEach((a) => (a.includes("+") ? x++ : x--));
  return x;
}
