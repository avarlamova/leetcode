// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Input: rowIndex = 3
// Output: [1,3,3,1]
// Input: rowIndex = 0
// Output: [1]

//'dumb' straightforward solution
var getRow = function (rowIndex) {
  let currentRow = [];
  let rows = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    currentRow = Array(i + 1).fill(1);
    const prev = rows[i - 1];

    for (let j = 1; j < currentRow.length - 1; j++) {
      currentRow[j] = prev[j - 1] + prev[j];
    }
    rows.push(currentRow);
  }
  console.log(rows[rowIndex]);
};

getRow(2);

//recursive solution
var getRow1 = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  } else if (rowIndex === 1) {
    return [1, 1];
  } else {
    const prevRow = getRow1(rowIndex - 1);
    let currentRow = Array(rowIndex + 1).fill(1);
    for (let j = 1; j < rowIndex; j++) {
      currentRow[j] = prevRow[j - 1] + prevRow[j];
    }
    return currentRow;
  }
};

getRow1(2);
