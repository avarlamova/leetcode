const findMajority = (sequence) => {
  const majorityCount = Math.floor(sequence.length / 2);

  let count = {};
  let answer;
  for (const item of sequence) {
    if (!count[item]) {
      count[item] = 1;
    }
    if (count[item] === majorityCount) {
      answer = item;
      break;
    } else count[item]++;
  }
  return answer;
};

console.log(findMajority([1, 1, 1, 5, 1, 6, 7, 7, 8]));
// решение за nlogn
// сортируем все числа, ровно в середине массива будет маджорити

const findMajority1 = (sequence) => {
  const majorityCount = Math.floor(sequence.length / 2);

  sequence.sort((a, b) => a - b);
  return sequence[majorityCount];
};
console.log(findMajority1([7, 5, 5, 4, 5, 4, 5, 7, 8]));
