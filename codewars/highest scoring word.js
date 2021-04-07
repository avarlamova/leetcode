/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in 
the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    x = x.split(' ');
    let sumsMap = x.map(item => {
      let sum = 0;
      for (let i = 0; i<item.length;i++) {
        let idx = alphabet.indexOf(item[i])+1;
        sum+=idx
      }
      return sum
    })
    let highestScoring = Math.max(...sumsMap);
    let index = sumsMap.indexOf(highestScoring);
      return x[index]
    }