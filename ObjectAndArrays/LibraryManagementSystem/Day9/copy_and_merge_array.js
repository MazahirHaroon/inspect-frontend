// Copying & Merging Arrays (Spread Operator)
// ------------------------------------------
// This example teaches two key ideas:
// 1. How to copy an array without sharing the same memory reference
// 2. How to merge two arrays into a new array
//
// These concepts are very important in React because state updates must be
// done immutably — meaning we create NEW arrays instead of modifying old ones.

// Original list
const numbers = [1, 2, 3, 4];

// ------------------------------------------------------------
// Copying an array
// ------------------------------------------------------------

// ❌ Wrong way: this copies ONLY the reference, not just the data
// const anotherNumbers = numbers;

// ✔ Correct way: spread creates a NEW array with the same values
const anotherNumbers = [...numbers];

// Mutate original array
numbers.push(100);

// Print both arrays to show the difference
console.log('numbers:', numbers); // [1, 2, 3, 4, 100]
console.log('anotherNumbers:', anotherNumbers); // [1, 2, 3, 4]

// Notice:
// - `numbers` changed
// - `anotherNumbers` did NOT change
// This proves that spread created a separate copy.

// ------------------------------------------------------------
// Merging two arrays
// ------------------------------------------------------------

// Another sample list
const newList = [5, 6, 7, 8];

// Merge using spread
// This creates one new array containing all values of `numbers` and `newList`
const finalList = [...numbers, ...newList];

console.log('finalList:', finalList);

/*
Expected Output:
numbers: [1, 2, 3, 4, 100]
anotherNumbers: [1, 2, 3, 4]
finalList: [1, 2, 3, 4, 100, 5, 6, 7, 8]

Notes:
- Spread operator creates a shallow copy (new memory).
- Perfect for React state updates: setList(prev => [...prev, newValue]).
- Merging arrays is done by spreading both arrays into a new array.
*/
