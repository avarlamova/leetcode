// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let tempIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      tempIdx = i;
      break;
    }

    if (nums[i] < target) {
      tempIdx = i + 1;
    }
  }
  return tempIdx;
};

// binary search method!!

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  if (target < nums[startIdx]) {
    return 0;
  }

  if (target > nums[endIdx]) {
    return endIdx + 1;
  }

  while (startIdx <= endIdx) {
    let arrayMiddle = Math.floor((startIdx + endIdx) / 2);

    if (nums[arrayMiddle] === target) {
      return arrayMiddle;
    } else if (target > nums[arrayMiddle]) {
      startIdx = arrayMiddle + 1;
    } else if (target < nums[arrayMiddle]) {
      endIdx = arrayMiddle - 1;
    }
  }
  return endIdx + 1;
};
