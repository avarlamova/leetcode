// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the maximum value.

// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

function fibonacci(max) {
  // program to generate fibonacci series up to n terms
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  let sequence = [n1, n2];

  while (sequence[sequence.length - 1] < max) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    if (n2 >= max) {
      break;
    } else {
      sequence.push(n2);
    }
  }
  return sequence.filter((el) => el % 2 === 0).reduce((a, b) => a + b);
}
