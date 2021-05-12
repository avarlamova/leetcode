/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

function duplicateCount(text){
    let res = 0;
    text = text.toLowerCase().split('');
    let countObj = {};
    for(let i = 0; i < text.length; i++){ 
       if (countObj[text[i]]){
       countObj[text[i]] += 1
       } 
       else {
       countObj[text[i]] = 1
       }
      }  
    for (let prop in countObj){
        if (countObj[prop] >= 2){
          res++
        }
    }
  return res
}

//2nd solution
function duplicateCount(text){
    text = text.toLowerCase();
    let count = 0;
    let used = [];
    
    text.split('').forEach(a=> {
      if (!used.includes(a) && (text.split(a).length - 1) > 1) {
        count++;
        used.push(a);
      }
    });
    
    return count;
}