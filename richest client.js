/**
 * 
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
 * Return the wealth that the richest customer has.
 * @param {number[][]} accounts
 * @return {number}
 */

let maximumWealth = function(accounts) {
    let result = accounts.map(account => account.reduce((a, b) => a + b));
    result = Math.max.apply(null,result);
    return result
};