const hasRepeatingNumber = (arr) => arr.length !== new Set(arr).size;

let answer = "NO";
let obj = {};
if (hasRepeatingNumber) {
  for (let i = 0; i < sequence.length; i++) {
    const el = sequence[i];
    if (!obj[el]) {
      obj[el] = [i];
    } else obj[el].push(i);
  }
  for (const value of Object.values(obj)) {
    if (value.length > 1) {
      const diff = (array) => array.slice(1).map((v, i) => v - array[i]);
      const differences = diff(value); //array

      if (differences.filter((el) => el <= k).length > 0) {
        answer = "YES";
        break;
      }
    }
  }
}
