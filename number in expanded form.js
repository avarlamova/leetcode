/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

function expandedForm(num) {
    let res = [];
  let arr = num.toString().split('');
    let j = 0;
   for (let i = arr.length-1; i>-1; i--) {
    let number = parseInt(arr[i])*Math.pow(10,j);
    if (number!=0)
    res.unshift(parseInt(arr[i])*Math.pow(10,j));
     j++
    }
    return res.join(' + ')
  }