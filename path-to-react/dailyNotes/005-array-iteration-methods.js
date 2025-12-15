// ==================================================
// Array Methods — forEach, map, filter, find
// ==================================================
//
// These methods help us work with arrays easily.
// They are commonly used in real applications
// like our Movie Explorer project.
//
// --------------------------------------------------
// IMPORTANT:
// These methods DO NOT change the original array
// (except sort, which we will learn separately).
// --------------------------------------------------

// ==================================================
// 1. forEach — Do something for each item
// ==================================================
//
// forEach is used when we want to perform an action
// for every element in an array.
//
// It does NOT return anything.
// It is mostly used for logging, counting, or UI work.
//

const names = ['Amina', 'Shafin', 'Arjun'];

function greetName(name) {
  console.log(`Hello ${name}`);
}

names.forEach(greetName);

// Output:
// Hello Amina
// Hello Shafin
// Hello Arjun

// ==================================================
// 2. map — Transform each item into something new
// ==================================================
//
// map is used when we want to create a NEW array
// from an existing array.
//
// The new array will always have the SAME length.
//

const numbers = [1, 2, 3, 4];

function doubleNumber(num) {
  return num * 2;
}

const doubledNumbers = numbers.map(doubleNumber);

console.log(doubledNumbers);
// Output: [2, 4, 6, 8]

// Original array remains unchanged
console.log(numbers);
// Output: [1, 2, 3, 4]

// ==================================================
// 3. filter — Keep only matching items
// ==================================================
//
// filter is used when we want to REMOVE some items
// and keep only those that satisfy a condition.
//
// It returns a NEW array.
//

const marks = [35, 78, 90, 42, 60];

function isPassed(mark) {
  return mark >= 40;
}
/*
Explanation:

The expression (mark >= 40) already gives us a result.
It returns:
- true  → if the mark is 40 or more
- false → if the mark is less than 40

So this single line:
return mark >= 40;

does the SAME thing as the code we wrote in the call.
that is:

function isPassed(mark) {
  if (mark >= 40) {
    return true;
  } else {
    return false;
  }
}

Both versions return true or false.
The shorter version is preferred because it is cleaner and easier to read.
*/

const passedMarks = marks.filter(isPassed);

console.log(passedMarks);
// Output: [78, 90, 42, 60]

// ==================================================
// 4. find — Find the first matching item
// ==================================================
//
// find returns ONLY ONE item.
// It stops searching once a match is found.
// If nothing matches, it returns undefined.
//

const students = [
  { name: 'Amina', age: 18 },
  { name: 'Shafin', age: 22 },
  { name: 'Arjun', age: 17 },
];

function isAdultStudent(student) {
  return student.age > 18;
}

const foundStudent = students.find(isAdultStudent);

console.log(foundStudent);
// Output: { name: 'Shafin', age: 22 }

// ==================================================
// 5. Key Differences (Very Important)
// ==================================================
//
// forEach → does NOT return anything
// map     → returns a NEW array (same length)
// filter  → returns a NEW array (shorter length)
// find    → returns ONE value (or undefined)
//
// --------------------------------------------------
