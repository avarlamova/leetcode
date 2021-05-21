/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.


###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript 
*/


function titleCase(title, minorWords) {
    if (!title) return title //for a testcase with empty string
    
    else {
    title = title.toLowerCase();
    if (minorWords) {
      minorWords = minorWords.toLowerCase();
      minorWords = minorWords.split(' ');
      }
    else minorWords = []; //so that minorWords are not undefined
    let res = '';
    function capitalize(word){
      let el = word.split('')[0]
      return el.toUpperCase() + word.slice(1);
    }
    let arr = title.split(' ');
    let firstWord = capitalize(arr[0]);
    for (let i = 1; i<arr.length; i++) {
        if (minorWords.includes(arr[i]))
        res+=' '+arr[i].toLowerCase();
        else
        res+=' '+capitalize(arr[i])
        }
    return firstWord+res
}
}
  
//solution 2

function titleCase(title, minorWords) {
    if (!title) return title //for a testcase with empty string

    if (minorWords!=='undefined') {
        minorWords = minorWords.toLowerCase().split(' ')
    }
    else minorWords=[];
    return title.toLowerCase().split(' ').map(function(v, i) {
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    }).join(' ');
  }
}