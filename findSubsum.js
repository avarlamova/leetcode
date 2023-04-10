// Дан массив целых чисел и целое число k. Нужно определить, есть ли в массиве два числа, сумма которых равна k .

// Пример:

// Вход: nums = [10, 15, 3, 7], k = 17

// Выход: True

function findSub(nums, k) {
  //используется массив, а не объект, так как в нем быстрее проверить наличие числа
  let seenNumbers = {};

  for (const currNum of nums) {
    let sumLeft = k - currNum;
    if (sumLeft in seenNumbers) return true;
    else {
      seenNumbers[currNum] = 1;
    }
  }
  return false;
}
