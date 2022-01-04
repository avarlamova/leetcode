// let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

function partsSums(ls) {
  if (ls.length > 0) {
    let sums = [];
    let len = ls.length;
    for (let i = 0; i <= len; i++) {
      sums.push(ls.reduce((a, b) => a + b, 0));
      ls.shift();
    }
    return sums;
  } else return [0];
}

// better performance

function partsSums(ls) {
  let sums = [];

  let accumulatedSum = ls.reduce((a, b) => a + b, 0);
  sums.push(accumulatedSum);
  for (let i = 0; i < ls.length; i++) {
    sums.push(accumulatedSum - ls[i]);
    accumulatedSum = accumulatedSum - ls[i];
  }

  return sums.length > 0 ? sums : [0];
}

//     let len = ls.length
//     for (let i = 0; i<=len; i++) {
//       sums.push(ls.reduce((a,b) => a+b, 0))
//       ls.shift()
//       console.log(ls.length)
//     }
//   return sums
//     }
//   else return [0]
