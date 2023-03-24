// на вход приходит массив строк, нужно получить все комбинации и сравнить с хэшем
const { createHash } = require("node:crypto");

const capitalizeArr = (arr) => arr.map((el) => el.toUpperCase());

const compareHash = (arr, targetVal) => {
  let combinations = [];
  let capitalizedArr = capitalizeArr(arr);
  let newArr = arr.concat(capitalizedArr);
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      combinations.push(newArr[i] + newArr[j]);
    }
  }
  return combinations.filter((el) => {
    const hashedElement = createHash("sha256").update(el).digest("hex");
    return hashedElement.toUpperCase() === targetVal.toUpperCase();
  });
};

console.log(
  compareHash(
    [
      "center",
      "cyan",
      "purple",
      "00FFFF",
      "#00FFFF",
      "df98ff",
      "989898",
      "#989898",
      "#dfdfdf",
      "dfdfdf",
      "#df98ff",
      "223152255",
      "00df98",
      "#00df98",
      "df98",
      "#df98",
      "223152",
      "0223152",
      "000223152",
      "3c5a0",
      "#3c5a0",
      "03c5a0",
      "#03c5a0",
      "3197160",
      "003197160",
      "08e27e",
      "#08e27e",
      "8e27e",
      "#8e27e",
      "8226126",
      "008226126",
      "e6e79b",
      "#e6e79b",
      "230231155",
      "e5e79b",
      "#e5e79b",
      "229231155",
      "e7e79b",
      "#e7e79b",
      "231231155",
      "e79be5",
      "#e79be5",
      "231155229",
      "2e5bda",
      "#2e5bda",
      "4191218",
    ],
    "b1d32bb79d188534eac82971efe63539397fc12f37ecd5e9b7f49179ab932eff"
  )
); // 2^4
// console.log(createHash("sha256").update(key).digest("hex"));
const readline = require("readline");
const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");
const readStream = fs.createReadStream("input.txt");
const rl = readline.createInterface({
  input: readStream,
});
let lines = [];

rl.on("line", (line) => {
  lines.push(line);
});
rl.on("close", () => {
  writeStream.end(
    lines
      .map((el) => '"' + el + '"')
      .join(",")
      .toString()
  );
});
