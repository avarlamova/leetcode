/**
 * @param {number} x
 * @return {number}
 Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.
 */
var mySqrt = function(x) {
  //binary search approach
  let left = 0;
  let right = x;

  while (left <= right) {
      const middle = Math.floor((left + right)/2)
      // если середина меньше x, но следующее число уже его превышает, то по условиям нужно вернуть меньшее 
      if (middle * middle <= x && (middle + 1) * (middle + 1) > x) return middle
      else if (middle * middle < x) left = middle + 1;
      else right = middle - 1;
  }
};