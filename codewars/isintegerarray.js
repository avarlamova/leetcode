/*Write a function 

returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
    if(arr){
    if(arr.length!=0) 
    return arr.every(el=>el===parseInt(el));
    if (arr='[]') return true
      }
    else return false
  }