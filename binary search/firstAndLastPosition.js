// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1] 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

  let firstOccurence = -1;
  let lastOccurence = -1;

  // 1. ищем бинарным поиском левую границу
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left+right) / 2)
    if (nums[middle] === target && nums[middle - 1] !== target) firstOccurence = middle // проверяем, что слева не target

    if (nums[middle] < target) {
      left = middle + 1
    }
    else {
      right = middle - 1
    }
  }

  left = 0;
  right = nums.length - 1;

  // 2. ищем бинарным поиском правую границу
  while (left <= right) {
    const middle = Math.floor((left+right) / 2)
    if (nums[middle] === target && nums[middle + 1] !== target) lastOccurence = middle // проверяем, что справа не target

    if (nums[middle] <= target) {
      left = middle + 1
    }
    else {
      right = middle - 1
    }
  }

  return [firstOccurence, lastOccurence]
}