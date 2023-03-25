// const findShortest = (phrase: string) => {
//   const phraseArr: string[] = phrase.split(" ");
//   let minLength: number = 0;
//   let shortestWord: string = "";
//   for (let i: number = 0; i < phraseArr.length; i++) {
//     if (phraseArr[i].length < minLength) {
//       minLength = phraseArr[i].length;
//       shortestWord = phraseArr[i];
//     }
//   }
//   return shortestWord;
// };

// console.log(findShortest("test g ggggh"));

// loop
const findShortest = (phrase) => {
  const phraseArr = phrase.split(" ");
  let shortestWord = phraseArr[0];
  let minLength = shortestWord.length;

  for (let i = 1; i < phraseArr.length; i++) {
    if (phraseArr[i].length < minLength) {
      minLength = phraseArr[i].length;
      shortestWord = phraseArr[i];
    }
  }
  return shortestWord;
};

console.log(findShortest("test g ggggh"));

//sort
const findShortest1 = (phrase) => {
  const phraseArr = phrase.split(" ");

  return phraseArr.sort((a, b) => a.length - b.length)[0];
};
console.log(findShortest1("test g ggggh"));
