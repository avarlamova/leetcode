/**
 * Implement function getResult
 * Правило простое: в выходной строке, подстрока в фигурных скобках повторяется столько раз, какое число указано перед скобками, например, 2{a} -> "aa". Внутри фигурных скобок могут быть вложены и другие выражения с фигурными скобками, максимальный уровень вложенности равен 5. 

Ввод:

s - исходная строка 
Вывод:

string - измененная строка после работы шлюза
Пример 1:

s ="2{b}3{fg}"
getResult(s) = bbfgfgfg
Пример 2:

s ="4{b3{a}}" 
getResult(s) = baaabaaabaaabaaa
 */
function getResult(formula) {
  let result = "";
  let object = {};

  let arr = formula.split("");
  let stack = [];
  let lastOpenBracketIdx;
  let lastClosingBracketIdx;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "{") {
      lastOpenBracketIdx = i;
    }
  }

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] === "}") {
      lastClosingBracketIdx = i;
    }
  }
  if (lastOpenBracketIdx > lastClosingBracketIdx) {
    console.log("not nested");
  } else {
    console.log(Number(arr[lastOpenBracketIdx + 1]));
    let count = lastClosingBracketIdx - (lastOpenBracketIdx - 1);
    // for (let i = 1; i <= arr[lastOpenBracketIdx - 1]; i++) {
    //   result += arr[lastClosingBracketIdx - 1];
    // }
    object[arr[lastOpenBracketIdx - 1]] = arr[lastClosingBracketIdx - 1];
    arr.splice(lastOpenBracketIdx - 1, count);
    // arr = arr.filter((el) => el !== "{" && el !== "}");
    // arr = arr.filter((el) => el !== "}");
    if (arr.filter((el) => el !== "{" && el !== "}").length > 0) {
      getResult(arr.join(""));
    }
  }
  console.log(object);
  return object;
}

// getResult("4{b3{a}}");
// getResult("4{b}}");
decodeString("4{b3{a}}");

function decodeString(s) {
  // holds the number of apreances of each sequence
  const numberStack = [];
  // holds the sequences we see along the way
  // if we see '[' we start and new sequences
  // if we see ']' we end the latest sequence and add the result to the prev sequence
  // which holds the inside sequence the we just calculated.
  const seqStack = [""];
  for (let i = 0; i < s.length; i++) {
    // if we see a number we push the full number and continue
    let char = s[i];
    if (char >= 0 && char <= 9) {
      while (s[i + 1] >= 0 && s[i + 1] <= 9) {
        char += s[i + 1];
        i++;
      }
      numberStack.push(+char);
      continue;
    }

    // if we see '[' we start a new sequence
    if (char === "{") {
      seqStack.push("");

      // if we see ']' we take the latest number and multiply by the latest sequence
      // and add that to the previous sequence.
    } else if (char === "}") {
      const number = numberStack.pop();
      const latestSeq = seqStack.pop();
      const seq = latestSeq.repeat(number);
      seqStack[seqStack.length - 1] += seq;

      // if we see a char we add it to the latest sequence.
    } else {
      seqStack[seqStack.length - 1] += char;
    }
  }
  console.log(seqStack[0]);
  return seqStack[0];
}

/**
 * Implement function getResult
 */
function getResult(formula) {
  let multiply = [];
  let subString = [];
  let res = "";

  for (const char of formula) {
    if (!isNaN(char)) {
    } else if (char === "{") {
    } else if (char === "}") {
    }
  }

  console.log(numberStack);
}
