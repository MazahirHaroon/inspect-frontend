/*
Challenge 1 — Array Transformation

Problem
Implement a function that removes duplicates and sorts numbers 
in ascending order.
*/

function uniqueSorted(arr) {
  return [...new Set(arr)].sort((a, b) => a - b);
}
console.log(uniqueSorted([3, 1, 2, 13, 11, 3, 2, 11, 4, 7, 7, 7]));
console.log(uniqueSorted([]));
console.log(uniqueSorted([-3, 1, -2, 13, 11, -3, 3, 2, 11, 4, 7, 7, 7]));
