/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

*/

//solution 1
function findOutlier(integers) {
  let evenCheck = integers.filter((i) => i % 2 === 0);
  let res;
  if (evenCheck.length > 1) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 1 || integers[i] % 2 === -1) res = integers[i];
    }
    return res;
  } else {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) res = integers[i];
    }
    return res;
  }
}

//solution 2
function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
