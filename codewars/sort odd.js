/*You will be given an array of numbers. You have to sort the odd numbers in ascending 
order while leaving the even numbers at their original positions.*/

function sortArray(arr) {
    let odd = [];
      //finding odd numbers in array
    for (let i = 0; i<arr.length; i++) {
      if ((arr[i]%2===1)||(arr[i]%2===-1))
        odd.push(arr[i]);
      }
      //sorting odd numbers in ascending order
      odd = odd.sort((a,b) => a-b);
    
      for (let i = 0; i<arr.length; i++) {
      if ((arr[i]%2===1)||(arr[i]%2===-1))
      arr[i]=odd.shift();
    }
      return arr
    }

    //2nd solution using 'pop' method instead of 'shift' to increase speed

    function sortArray(arr) {
        let odd = [];
          //finding odd numbers in array
        for (let i = 0; i<arr.length; i++) {
          if ((arr[i]%2===1)||(arr[i]%2===-1))
            odd.push(arr[i]);
          }
          //sorting odd numbers in ascending order
          odd = odd.sort((a,b) => b-a);
        
          for (let i = 0; i<arr.length; i++) {
          if ((arr[i]%2===1)||(arr[i]%2===-1))
          arr[i]=odd.pop();
        }
          return arr
        }