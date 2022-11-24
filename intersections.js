// Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
// Надо вернуть [1, 2, 2, 3] (порядок неважен)

const findIntersection = (arr1, arr2) => {
    let res = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            res.push(arr1[i]);
        }
    }
    return res;
}


// one-line
const intersection = (arrA, arrB) => {
   return arrA.filter(x => arrB.includes(x))
}

