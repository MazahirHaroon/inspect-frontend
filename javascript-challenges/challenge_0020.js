/*
Challenge 2 — Count Frequency

Problem
Return an object where keys are elements and values are their counts.
*/

function frequencyMap(arr) {
  const map = new Map();
  arr.forEach((element) => {
    let value = map.get(element);

    if (value === undefined) {
      map.set(element, 1);
    } else {
      map.set(element, value + 1);
    }
  });
  return Object.fromEntries(map);
}

console.log(frequencyMap(['a', 'b', 'b', 'a', 'c', 'b']));
console.log(frequencyMap([]));
