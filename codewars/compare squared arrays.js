// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(arr1, arr2) {
  arr1 = arr1.map((e) => Math.pow(e, 2));
  if (typeof arr2 !== "null") {
    let sameElementsCounter = 0;
    for (const item of arr2) {
      if (arr1.includes(item)) {
        sameElementsCounter++;
      }
    }
    return sameElementsCounter === arr1.length;
  } else return false;
}

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
const comp = (array1, array2) =>
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every((item) => {
    const index = array2.indexOf(Math.pow(item, 2));
    return index > -1 ? array2.splice(index, 1) : false;
  });
