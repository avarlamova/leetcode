// дан объект и путь его свойства. Вернуть или то, что лежит в свойстве, или undefined
function get(obj, path) {
  const objKeys = path.split(".");
  if (objKeys.length > 1) {
    const currentKey = objKeys.shift();
    return get(obj[currentKey], objKeys.join("."));
  } else {
    return obj[objKeys[0]];
  }
}

let obj = {
  a: "a",
  b: {
    c: "f",
    d: "t",
  },
};
console.log("answer: ", get(obj, "b.c"));
// get(obj, "b.c");
