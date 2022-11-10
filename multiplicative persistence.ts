// Giving an integer N in input:
// In math, the multiplicative persistence of N is the number of times we can multiply the digits of N together before reaching a single digit number.

// For example:
// The multiplicative persistence of 679 is 5 because:
// 679: 6 x 7 x 9 = 378
// 378: 3 x 7 x 8 = 168
// 168: 1 x 6 x 8 = 48
// 48: 4 x 8 = 32
// 32: 3 x 2 = 6 (one-digit number)
// It took 5 steps to get to a one-digit number, so the multiplicative persistence of 679 is 5.

const countPersistence = (n: number) => {
let count = 0;
const multiplyDigits = (num: string) => {
  let answer = parseInt(num[i]);
  for (let i = 0; i < num.length; i++) {
    const digit = parseInt(num[i])
    answer = answer * digit;
  }
  return answer.toString();
}
let res = multiplyDigits(n.toString());
while (res.length !== 1) {
  res = multiplyDigits(res.toString());
  count++;
}
return count
}