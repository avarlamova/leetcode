/**
 * @param {number[]} nums
 * @return {number}
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 */
var majorityElement = function (nums) {
  let map = new Map();

  for (const num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }
  //finding the key by greatest value
  let res = Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
  return res;
};

// approach which compares to n/2 value

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let majorityCount = Math.floor(nums.length / 2) + 1;
  let res;
  for (const num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1;
    if (map[num] >= majorityCount) {
      res = num;
      break;
    }
  }
  return res;
};
