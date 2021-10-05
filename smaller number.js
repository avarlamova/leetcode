/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let numsSortedArray = [...nums].sort((a, b) => a - b);
  let numsSortedMap = {};

  numsSortedArray.forEach((elem, index) => {
    if (!numsSortedMap.hasOwnProperty(elem)) {
      numsSortedMap[elem] = index;
    }
  });

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = numsSortedMap[nums[i]];
  }
  return result;
};
