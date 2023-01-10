// Функция вычисляет положительные числа Фибоначчи.
// fib(3);  // 2
// fib(5);  // 5
// fib(10); // 55
//  Аргументом является порядковый номер числа, нумерация чисел в последовательности начинается с нуля.

// O (n)
function fib(n) {
  if (n < 2) {
    //первые два числа равны 0 и 1
    return n;
  } else {
    // 0, 1, 1, 2, 3,
    let fibArr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr[n];
  }
}

//recursion
// O (2^n)
function recursiveFib(n) {
  if (n < 2) {
    //первые два числа равны 0 и 1
    return n;
  } else {
    return recursiveFib(n - 2) + recursiveFib(n - 1);
  }
}
console.log(fib(3));
console.log(fib(5));
console.log(fib(10));

console.log(recursiveFib(3));
console.log(recursiveFib(5));
console.log(recursiveFib(10));
