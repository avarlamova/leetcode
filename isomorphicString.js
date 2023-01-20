// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

var isIsomorphic = function (s, t) {
  let sObj = {};
  let tObj = {};

  for (let i = 0; i < s.length; i++) {
    // assign s to t in the dictionary, and vice versa
    if (!sObj[s[i]]) {
      sObj[s[i]] = t[i];
    }
    if (!tObj[t[i]]) {
      tObj[t[i]] = s[i];
    }

    // if the letter in t dictionary doesn't correspond to s dictionary, return false
    if (tObj[t[i]] !== s[i] || sObj[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
};

// code string solution

const isIsomorphic2 = (s, t) => {
  return createStringCode(s) === createStringCode(t);
};

//encode string to compare them
function createStringCode(s) {
  let map = new Map();
  let id = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], id);
      str = str + id + ".";
      id += 1;
    } else {
      const key = map.get(s[i]);
      str = str + key + ".";
    }
  }
  return str;
}
