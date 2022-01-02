function numberOfPairs(gloves) {
  let pairs = 0;
  const obj = {};

  gloves.forEach((i) => {
    if (obj[i]) {
      pairs += 1;
      obj[i] = 0;
    } else {
      obj[i] = 1;
    }
  });
  return pairs;
}
