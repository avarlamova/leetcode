var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let currentChar = map[s.charAt(i)];
    let nextChar = map[s.charAt(i + 1)];

    if (nextChar) {
      if (currentChar >= nextChar) {
        sum += currentChar;
      } else {
        sum += nextChar - currentChar;
        i++;
      }
    } else {
      sum += currentChar;
    }
  }

  return sum;
};
