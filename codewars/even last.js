function evenLast(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i = i + 2) {
    sum += numbers[i];
  }
  let last = numbers[numbers.length - 1];
  sum = sum * last;

  if (numbers.length > 0) return sum;
  else return 0;
}
