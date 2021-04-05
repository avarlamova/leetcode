/*
*/

function repeater(string, n){
    let res = '';
    for (let i =0; i<n;i++) {
      res+=string;
    }
      return res
}

function repeater (string, n) {
    return string.repeat(n);
  }


  function repeater(string, n){
    let res = [];
    while (res.length<n) {
      res.push(string);
    }
      return res.join('')
    }