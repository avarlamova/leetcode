// map solution
var containsDuplicate = function (nums) {
  let hashMap = {};

  for (const num of nums) {
    hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
  }
  let values = Object.values(hashMap);
  if (values.some((el) => el > 1)) {
    return true;
  } else return false;
};

// set solution
const containsDuplicate = function (nums) {
  return nums.length !== new Set(nums).size;
};

// 1st solution improved
const containsDuplicate = (nums) => {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    hash[num] = (hash[num] || 0) + 1;
    if (hash[num] > 1) return true;
  }
  return false;
};

// sorting

var containsDuplicate = function (nums) {
  nums.sort((num1, num2) => num1 - num2);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
};
