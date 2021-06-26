/*
Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
Raise an error if input arguments are not of equal length.*/

//solution 1
function addArrays(array1, array2) {
  if (array1.length != array2.length) throw new Error();
  return array1.map((a, i) => array1[i] + array2[i]);
}

//solution 2
function addArrays(array1, array2) {
  let res = [];
  if (array1.length == array2.length) {
    for (let i = 0; i < array1.length; i++) {
      res.push(array1[i] + array2[i]);
    }
    return res;
  } else throw new Error();
}
