var finalValueAfterOperations = function (operations) {
  let count = 0;
  for (let i = 0; i < operations.length; i++) {
    operations[i][1] === "+" ? count++ : count--;
  }
  return count;
};
