type MyArr = Array<number> | Array<string>;
type ArrItem = number | string;
// straightforward solution
const findIntersection = (arr1: MyArr, arr2: MyArr) => {
  const intersection: MyArr = [];
  for (let i = 0; i < arr1.length; i++) {
    const item: ArrItem = arr1[i];
    if (arr2.includes(item) && !intersection.includes(item)) {
      intersection.push(item);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    const item: ArrItem = arr2[j];
    if (arr1.includes(item) && !intersection.includes(item)) {
      intersection.push(item);
    }
  }
  return intersection;
};

console.log(findIntersection([1, 2, 4, 6, 7, 4], [34, 2, 1, 5, 4]));

// map solution
const findIntersection1 = (arr1: MyArr, arr2: MyArr) => {
  const intersectionMap = new Map();

  const smallerLength = arr1.length > arr2.length ? arr2.length : arr1.length;
  for (let i = 0; i < smallerLength; i++) {
    const item = arr2[i];
    if (arr1.includes(item) && !intersectionMap.has(item)) {
      intersectionMap.set(item, 1);
    }
  }

  return Array.from(intersectionMap.keys());
};

console.log(findIntersection1([1, 2, 4, 6, 7, 4], [34, 2, 1, 5, 4]));

// set solution

const findIntersection2 = (arr1: MyArr, arr2: MyArr) => {
  const solution = arr1.filter((num) => arr2.includes(num));
  return Array.from(new Set(solution));
};
console.log(findIntersection2([1, 2, 4, 6, 7, 4], [34, 2, 1, 5, 4]));
