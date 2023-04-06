/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 * There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

Return a list of groups such that each person i is in a group of size groupSizes[i].

Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.


 */
var groupThePeople = function (groupSizes) {
  let answer = [];
  let testMap = {};

  for (let j = 0; j < groupSizes.length; j++) {
    const groupSize = groupSizes[j];

    if (testMap.hasOwnProperty(groupSize)) {
      testMap[groupSize].push(j);
    } else {
      testMap[groupSize] = [j];
    }

    if (testMap[groupSize].length == groupSize) {
      answer.push(testMap[groupSize]);
      testMap[groupSize] = [];
    }
  }

  return answer;
};

// solution via map
const groupThePeople = function (groupSizes) {
  if (!groupSizes.length) return [];

  const result = [];
  const map = new Map();

  for (let i = 0; i < groupSizes.length; i++) {
    const groupSize = groupSizes[i];

    if (!map.get(groupSize)) map.set(groupSize, []);
    map.get(groupSize).push(i);

    if (map.get(groupSize).length === groupSize) {
      result.push(map.get(groupSize));
      map.delete(groupSize);
    }
  }

  return result;
};
