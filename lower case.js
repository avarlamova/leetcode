/**
 * @param {string} s
 * @return {string}
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 
 */
var toLowerCase = function (s) {
  let res = "";
  s.split("").map((el) => {
    let code = el.charCodeAt(0);
    if (code < 91 && code > 64) {
      res += String.fromCharCode(code + 32);
    } else res += el;
  });
  return res;
};
