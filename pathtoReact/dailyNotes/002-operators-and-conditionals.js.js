// Operators & Conditionals (1h)
// Day 2 Notes — Inspect Frontend

// ---------------------------------------------------------------
// 1. What are Operators?
// Operators allow us to perform operations on values.
// Think of them like actions we perform on real-life information.

// Real-life idea:
// If Safwan has ₹2000 and Alim gives him ₹3000 more:
// Total chocolates = 2000 + 3000

let safwanBalance = 2000;
let alimBalance = 3000;
let totalAmount = safwanBalance + alimBalance;
// totalAmount becomes 5000

// ---------------------------------------------------------------
// 2. Arithmetic Operators
// + addition
// - subtraction
// * multiplication
// / division
// % remainder

// Real-life example:
// If Shaba has a 6000-step goal and wants to divide it equally over 3 days:

let steps = 6000;
let days = 3;
let stepsPerDay = steps / days; // 2000

// ---------------------------------------------------------------
// 3. Comparison Operators
// Use these to compare values.
// > greater than
// < less than
// >= greater or equal
// <= less or equal
// === exactly equal (checks value + type)
// !== not equal

// Real-life example:
// If Amina scored 87 and the passing score is 50:

let aminaScore = 87;
let passingScore = 50;
let didAminaPass = aminaScore >= passingScore; // true

// ---------------------------------------------------------------
// 4. Logical Operators
// &&  AND  (both must be true)
// ||  OR   (at least one true)
// !   NOT  (opposite)

// Real-life example:
// Hafiz wants to join the session IF:
// he has internet AND his laptop is charged.

let hasInternet = true;
let laptopCharged = false;
let canJoinCall = hasInternet && laptopCharged; // false

// Another example:
// Shanas will attend IF it's Monday OR Tuesday.

let today = 'Tuesday';
let willShanasAttend = today === 'Monday' || today === 'Tuesday'; // true

// ---------------------------------------------------------------
// 5. What are Conditionals?
// Conditionals allow our program to make decisions.
// "If this happens, do this. Otherwise, do something else."

// Real-life idea:
// If it's raining, Thejus brings an umbrella.
// Otherwise, he doesn’t.

let isRaining = true;

if (isRaining) {
  console.log('Thejus brings an umbrella ☔');
} else {
  console.log('Thejus enjoys the sunshine ☀️');
}

// ---------------------------------------------------------------
// 6. else if
// Used when there are multiple conditions.

// Real-life example:
// If Naveen's attendance is:
// - Above 90 → Excellent
// - Above 70 → Good
// - Otherwise → Needs improvement

let naveenAttendance = 82;

if (naveenAttendance > 90) {
  console.log('Excellent attendance');
} else if (naveenAttendance > 70) {
  console.log('Good attendance');
} else {
  console.log('Needs improvement');
}

// ---------------------------------------------------------------
// 7. Ternary Operator (Short If-Else)
// condition ? valueIfTrue : valueIfFalse

// Real-life example:
// If Jamesy is online → "Present"
// Otherwise → "Absent"

let isJamesyOnline = false;
let jamesyStatus = isJamesyOnline ? 'Present' : 'Absent';

console.log(jamesyStatus);

// ---------------------------------------------------------------
// 8. Practical Mini Examples

// Example 1:
// If Arjun has more than 100 coins in his game, show "Level Up".

let arjunCoins = 120;
if (arjunCoins > 100) {
  console.log('Level Up! 🚀');
}

// Example 2:
// If Jatin's age is below 18, show "Minor", else "Adult"

let jatinAge = 17;
console.log(jatinAge < 18 ? 'Minor' : 'Adult');

// Example 3:
// If Amina has both laptop AND notes → "Ready to learn"
// else → "Prepare first"

let aminaLaptop = true;
let aminaNotes = true;

if (aminaLaptop && aminaNotes) {
  console.log('Amina is ready to learn ✔');
} else {
  console.log('Amina needs to prepare first ❗');
}

// ---------------------------------------------------------------
// 9. Exercises for Students
// Write conditions for:
// - Safwan entering class only if he is ON TIME.
// - Alim buying tea only if he has at least 10 rupees.
// - Check if Shaba has completed MORE THAN 3 assignments.
// - If Thejus walks more than 5000 steps → "Active Day".
// - If Naveen’s score is above 90 → "Top Performer".

// End of Day 2
// Next: Arrays & Object Basics (Deep Dive)
