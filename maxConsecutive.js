// Given a binary array nums, return the maximum number of consecutive 1's in the array.

var findMaxConsecutiveOnes = function (nums) {
  let counter = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      counter++;
    }
    if (nums[i] == 0) {
      counter = 0;
    }
    if (counter > max) {
      max = counter;
    }
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
