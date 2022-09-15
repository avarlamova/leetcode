const replaceWordWithDict = (dict, text) => {

  let res = [];
  for (const word of text) {
    let wordIsInDict = false;
    for (let i = 1; i <= word.length; i++) {
        let part = word.substring(0,i)
        if (dict.includes(part)) {
          wordIsInDict = true;
          res.push(part);
          break;
        }
    }
    if (!wordIsInDict) {
      res.push(word)
    }
  }
return res.join(' ')
};

const replaceWordWithDict1 = (dict, text) => {
  dict = dict.sort((a,b)=>a.localeCompare(b) || a.length - b.length)
  const dictMinLength = dict[0].length

  let res = [];
    for (let i = 0; i < text.length; i++) {
      let textWord = text[i]
      let dictString = textWord.substring(0,dictMinLength) 
      if(dict.includes(dictString)) {
        textWord = dictString
      }
        for (let j = dictMinLength; j < textWord.length; j++) {
            dictString += textWord[j]            
            if(dict.includes(dictString)) {
              textWord = dictString
              break;
            }
        }
        res.push(textWord)
    
    }
    return res.join(' ')
}

console.log(replaceWordWithDict1(['a','b'],['abdafb', 'basrt', 'casds', 'dsasa','a']))
console.log(replaceWordWithDict1(['aa','bc','aaa'],['a', 'aa', 'aaa', 'bcd','abcd']))