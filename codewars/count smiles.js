function countSmileys(arr) {
  let count = 0;

  const eyesRule = (item) => item[0] === ":" || item[0] === ";";
  const noseRule = (item) => item[1] === "-" || item[1] === "~";

  const mouthRule = (item) =>
    item[item.length - 1] === ")" || item[item.length - 1] === "D";

  for (const element of arr) {
    if (element.length === 2) {
      if (eyesRule(element) && mouthRule(element)) {
        count++;
      }
    }
    if (element.length === 3) {
      if (eyesRule(element) && mouthRule(element) && noseRule(element)) {
        count++;
      }
    }
  }
  return count;
}
