function checkPalindrome(str) {
  let firstPointer = 0;
  let secondPointer = str.length - 1;
  let flag = true;

  while (firstPointer < secondPointer) {
    if (str[firstPointer] === str[secondPointer]) {
      firstPointer++;
      secondPointer--;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}
// не используется дополнительная память урааа
console.log(checkPalindrome("шалаш"));
console.log(checkPalindrome("шалишь"));
console.log(checkPalindrome("аргентинаманитнегра"));
