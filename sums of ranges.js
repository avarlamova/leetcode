function maxSum(arr, range) {
  let sums = [];

  for (let i = 0; i < range.length; i++) {
    let currentSum = 0;

    let newarr = arr.slice(range[i][0], range[i][1] + 1);
    currentSum = newarr.reduce((acc, val) => acc + val);
    sums.push(currentSum);
  }
  return Math.max(...sums);
}
