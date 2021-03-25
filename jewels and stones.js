/** You're given strings jewels representing the types of stones 
 * that are jewels, and stones representing the stones you have. 
 * Each character in stones is a type of stone you have. You want to know 
 * how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of 
stone from "A".

 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
//1st variant
let numJewelsInStones = function(jewels, stones) {
    let jewels_arr = Array.from(jewels);
    let count = 0;
    for (let i = 0; i<stones.length; i++) {
        if (jewels_arr.includes(stones[i]))
        count = count+1;
    }
    return count
};

//2nd variant

let numJewelsInStones = function(jewels, stones) {
    return stones.split('').filter(el => jewels.includes(el)).length
};