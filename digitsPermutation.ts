const digitPermutation = (nums: number[]) => {
  const numbersMap = new Map();
  for (const num of nums) {
    const numHash = num.toString().split('').sort().join('');
    if (!numbersMap.has(numHash)) {
      numbersMap.set(numHash, [])
    }
    numbersMap.get(numHash).push(num)

  }
  return Array.from(numbersMap.values())
};

console.log(digitPermutation([1230, 199, 2301, 123, 110001, 3021, 101010, 991, 9]))
