 const isPalindrome = (val) => val === val.split("").reverse().join("");

  const breakPalindrome = (str) => {
    if (str.length===0 || str.length===1) {
        return ''
    }
    if (str.length === 3) {
      let newStr;
      if (str[0] !== "a") {
        newStr = str.substring(0) + "a" + str.substring(1);
      }
      else {
        newStr = newStr = str.substring(0, 2) + "b" + str.substring(3);
      }
      return newStr;
    } 
    else {
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== "a") {
          let newStr = str.substring(0, i) + "a" + str.substring(i + 1);
          if (!isPalindrome(newStr)) {
            return newStr;
          }
        }
      }
      const newStr = str.substring(0, str.length-1) + "b" + str.substring(str.length);
      return newStr;
    }
  };
