// Дана строка (возможно, пустая), состоящая из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
// И сгенерирует ошибку, если на вход пришла невалидная строка.
// Пояснения: Если символ встречается 1 раз, он остается без изменений; Если символ повторяется более 1 раза, к нему добавляется количество повторений.
let input = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB";

let res = "";
let lastSymbol = "";
let counter = 0;

for (let i = 0; i < input.length; i++) {
  let currentChar = input[i];
  if (currentChar !== lastSymbol) {
    res += currentChar;
    res += counter;
    counter = 0;
  }

  //   if (currentChar !== lastSymbol) {
  //     if (counter === 1) {
  //       res += currentChar;
  //     }
  //     if (counter > 1) {
  //       res += currentChar;
  //       res += counter;
  //     }
  //     counter = 1;
  //   }
  lastSymbol = currentChar;
  counter++;
}

console.log(res);
