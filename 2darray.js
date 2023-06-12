/**
 * @param {number[]} nums
 * @return {number[][]}
 You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.
Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.
Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
Explanation: We can create a 2D array that contains the following rows:
- 1,3,4,2
- 1,3
- 1
All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
It can be shown that we cannot have less than 3 rows in a valid array.
 */

// straightforward solution
const findMatrix = (nums) => {
    let numsObj = {}
    let res = []
    for (const num of nums) {
        if (numsObj.hasOwnProperty(num)) {
            numsObj[num].push(num)
        }
        else numsObj[num] = [num]
    }

    while(Object.values(numsObj).length > 0) {
        let newArr = []
        for (const property in numsObj) {
            newArr.push(numsObj[property].pop())
            if (numsObj[property].length < 1) delete numsObj[property]
        }
        res.push(newArr)
    }
    return res
};

var findMatrix1 = function(nums) {
    let res = [];
    let newArr = [];

    while (nums.length > 0) {
        newArr.push(nums.shift());

        let pointer = 0;
        while (pointer < nums.length) {
            const targetElement = nums[pointer];

            if (!newArr.includes(targetElement)) {
                newArr.push(targetElement);
                nums.splice(pointer, 1);
                pointer = 0;
            } else {
                pointer++;
            }
        }

        res.push(newArr);
        newArr = [];
    }

    return res;
};
