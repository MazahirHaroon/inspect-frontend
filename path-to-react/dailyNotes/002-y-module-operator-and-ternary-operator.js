// Day 3 Notes — Inspect Frontend
// ---------------------------------------------------------------

// Next: Modulo Operator, Ternary Operator, ! NOT (opposite)
// Next: Arrays & Objects (Deep Dive)

// ---------------------------------------------------------------
// 1. Modulo Operator (%)
// ---------------------------------------------------------------
// Modulo gives the REMAINDER after division.
//
// Real-life idea:
// If we share 10 chocolates between 3 kids:
// Each gets 3, and 1 chocolate is leftover → remainder = 1.

console.log(10 % 3); // 1

// Practical example:
// Check if a number is EVEN or ODD
let num = 7;
if (num % 2 === 0) {
  console.log('Even number');
} else {
  console.log('Odd number');
}

// ---------------------------------------------------------------
// 2. Ternary Operator ( ? : )
// ---------------------------------------------------------------
// Short form of an if/else.
// "condition ? valueIfTrue : valueIfFalse"
//
// Real-life idea:
// If Safwan reaches class on time → "Present"
// Otherwise → "Late"

let safwanOnTime = true;
let attendanceMessage = safwanOnTime ? 'Present' : 'Late';
console.log(attendanceMessage);

// Another example:
let age = 20;
let type = age >= 18 ? 'Adult' : 'Minor';
console.log(type);

// ---------------------------------------------------------------
// 3. NOT Operator (!)
// ---------------------------------------------------------------
// ! flips true ↔ false
//
// Real-life idea:
// If "isRaining" is true → !isRaining becomes false

let isRainingToday = true;
console.log(!isRainingToday); // false

// Practical example:
// If Amina does NOT have internet → show error

let aminaHasInternet = false;

if (!aminaHasInternet) {
  console.log('No internet! Cannot join class.');
} else {
  console.log('Ready for the class!');
}
