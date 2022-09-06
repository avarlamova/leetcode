//solution 1
const countSteps1 = (n) => {
  if (n===1) {
    return 1;
  }
  let ladder = 1;
  for (let i = 2; i < n; i++) {
    ladder++;
    n = n-i
  }
  return ladder
};
