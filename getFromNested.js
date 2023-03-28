// Напишите функцию get, принимающую список ключей, и возвращающую значение в объекте произвольной вложенности

// решение "в лоб"
const get = (keySequence, nestedObject) => {
  const objKeys = keySequence.split(".");
  let currentLayer = nestedObject;
  for (const objKey of objKeys) {
    currentLayer = currentLayer[objKey];
  }
  console.log(currentLayer);
};

//рекурсия

const get1 = (keySequence, nestedObject) => {
  let objKeys = keySequence.split(".");
  if (objKeys.length === 1) {
    return nestedObject[objKeys[0]];
  }
  let currentKey = objKeys.shift();
  let currentLayer = nestedObject[currentKey];
  return get1(objKeys.join("."), currentLayer);
};

const example1 = {
  red: {
    big: {
      apple: "got it!",
    },
  },
};

console.log(get1("red.big.apple", example1));
