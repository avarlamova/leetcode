/* Description: 
Given the array nums consisting of 2n elements 
in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn]


 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    //divide array into two separate arrays with N
    let arr1 = nums.slice(0,n);
    let arr2 = nums.slice(n,nums.length);
    let res = [];
    //consequently push elements from 2 arrays until we get the resulting array
    for (let i = 0; i<arr1.length; i++) {
        res.push(arr1[i]);
        res.push(arr2[i]);
    }
    return res
};