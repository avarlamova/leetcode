/**
 * @param {number[]} nums
 * @return {number}
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

 */
var pivotIndex = function (nums) {
  let rightSum = 0;
  let leftSum = 0;

  // 1. считаем сумму всех чисел
  // O(n)
  nums.forEach((v) => (rightSum += v));

  for (var i = 0; i <= nums.length - 1; i++) {
    let curr = nums[i];

    // сумма справа будет меньше на curr, если это pivot index
    rightSum -= curr;

    // если суммы равны, мы нашли pivot index
    if (leftSum === rightSum) return i;

    // если нет, движемся вправо
    leftSum += curr;
  }

  return -1;
};
