// Playground - today's notes (2nd December)

let name = 'Safwan';
let nameCopy = name;
// assignment operator

let anotherName = 'alim';

console.log(anotherName === name); // false

const firstNumber = 777;
const secondNumber = '777';

// ===
console.log(firstNumber === secondNumber); // false

// + - * /

let safwanBalance = 2000;
let shabaBalance = 3000;
let totalAmount = safwanBalance + shabaBalance;
console.log(totalAmount); // 5000

// If Alim has a 6000-step goal and wants to divide it equally over 3 days:

let steps = 6000;
let days = 3;
let stepsPerDay = steps / days; // 2000

console.log(3000 - 2000);
console.log(5 * 10);

// Real-life example:
// If Amina scored 87 and the passing score is 50:

let aminaScore = 87;
let passingScore = 50;
const result = aminaScore >= passingScore;
console.log(result);

let currentUsage = 1500;
let limit = 2000;
// Can I still use the internet?
const internetUsage = currentUsage >= limit;
// 1500 >= 2000
console.log(internetUsage);

const acceptedNotes = 500;
const currentRequest = 100;

console.log(currentRequest === acceptedNotes); // false
console.log(currentRequest !== acceptedNotes); // true

// Real-life example:
// Hafiz wants to join the session IF:
// he has internet AND his laptop is charged.

console.log(hasInternet);
console.log(laptopCharged);
//  Can I join this session? Both should be true

console.log(hasInternet === true);
console.log(laptopCharged === true);
console.log(hasInternet === true && laptopCharged === true);

const aHAsMoney = true;
const bHAsMoney = false;
// Can we have food from Al Taaza
// console.log(aHAsMoney === true || bHAsMoney === true);

const cCardBalance = 200;
const dCardBalance = 250;
// One of their card should have 250 or more as balance
// console.log(cCardBalance >= 250 || dCardBalance >= 250); // true

const aAge = 19;
const bAge = 12;
// Can both of them vote? Age should be 18 or above
// console.log(aAge >= 18 && bAge >= 18);

const hasInternet = true;
const laptopCharged = false;
const mobileCharged = true;

if (hasInternet === true && laptopCharged === true) {
  console.log('Yes, you can attend the class');
} else if (hasInternet === true && mobileCharged === true) {
  console.log(`Yes, you can attend the class but don't make this a practice`);
} else {
  console.log('No, you cannot attend the class');
}

const myAge = 12;
if (myAge >= 18) {
  console.log('Yes, you can vote!');
} else {
  console.log('No, you cannot vote');
}

//
const today = 'Friday';
// accepted days Monday, Tuesday, Wednesday
if (today === 'Monday' || today === 'Tuesday' || today === 'Wednesday') {
  console.log('We have class today');
} else {
  console.log(`We don't have class`);
}
