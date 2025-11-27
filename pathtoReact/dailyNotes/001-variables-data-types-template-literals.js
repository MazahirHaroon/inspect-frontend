// Variables + Data Types + Template Literals (1h)
// Day 1 Notes

// ---------------------------------------------------------------
// 1. What is a Variable?
// A variable is a named memory space where information is stored.

// Real-life idea:
// Think of a variable like a contact saved in your phone.
// The name is the variable name, and the number is the stored value.

// Code Example:
let firstName = 'Rida'; // storing text (string)
let rollNo = 121; // storing a number

// Rules for variable names:
// - Cannot start with a number
// - Cannot contain spaces
// - _ and $ are allowed
// - Must be meaningful

// Examples:
// let 1name = "wrong";  // ❌ invalid
// let full name = "no";  // ❌ invalid
let full_name = 'ok'; // ✔ valid
let $price = 99; // ✔ valid

// ---------------------------------------------------------------
// 2. let vs const
// let = value can change
// const = value cannot change

// Real-life idea:
// let → daily step count (changes every day)
// const → year of birth (never changes)

let stepsToday = 2000;
stepsToday = 3500; // ✔ allowed

const birthYear = 1998;
// birthYear = 2000; // ❌ error

// ---------------------------------------------------------------
// 3. Basic Data Types

// 1. String (text)
let personName = 'Alim';
let district = 'Ernakulam';

// 2. Number
let score = 98;
let price = 499;

// 3. Boolean (true/false)
let isLoggedIn = false;
let hasLicense = true;

// 4. Array (list of items)
let dailySteps = [2000, 3500, 4200, 5000];
let friends = ['Rida', 'Jamesy', 'Thejus', 'Jasli'];

// 5. Object (grouped data)
let person = {
  name: 'Alim',
  roll: 372,
  district: 'Ernakulam',
};

// ---------------------------------------------------------------
// 4. Template Literals (String Templates)
// Helps create dynamic sentences using backticks and ${}

// Old way:
// console.log("Hello " + name + ", welcome!");

// New way:
console.log(`Hello ${personName}, welcome!`);

// Real-life use case:
// Auto-generated messages like:
// "Hi Shafin, your order #12345 is out for delivery."

// 6. null (intentional empty value)
// Real-life idea:
// When a form has an empty field on purpose.
// Example: A user's middle name field is empty because they don't have one.

let middleName = null;
// null means: "There should be a value here, but right now it's empty on purpose"

// 7. undefined (value not assigned yet)
// Real-life idea:
// When you open a new mobile box — the SIM slot exists, but no SIM is inserted yet.

let address;
// undefined means: "This variable exists, but no value has been given to it yet"

console.log(middleName); // null
console.log(address); // undefined

// ---------------------------------------------------------------
// 8. Exercise
// Create:
// - string variable
// - number variable
// - boolean
// - null and undefined
// - Array of 3 favorite movies
// - An object describing themselves
// - A welcome message using template literals

// End of Day 1
// Tomorrow: Operators & Conditionals
