// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    let pointer1 = 0;

    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
      if (nums[pointer2] !== nums[pointer1]) {
        pointer1++;
        nums[pointer1] = nums[pointer2];
      }
    }
    return pointer1 + 1;
  }
};

// This solution basically uses a Set to get the unique values from nums.
// Then uses splice to remove all the items from the original array.
// And finally spreads the set into the array.

const removeDuplicates = (nums) => {
  nums.splice(0, nums.length, ...new Set(nums));

  return nums.length;
};
