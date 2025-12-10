// ---------------------------------------
// 1. WHY FUNCTIONS?
// ---------------------------------------
// Functions help avoid repeating code.
// They take input, process it, and produce output.
// Concept: Input → Function (machine) → Output

// ---------------------------------------
// 2. FUNCTION DEFINITION & CALLING
// ---------------------------------------

// Function definition with one parameter
function printGreeting(name) {
  console.log(`Hello ${name}, Good Evening`);
}

// Function calls with arguments
printGreeting('Shafin');
printGreeting('Amina');

/* 
In the code below, you can see duplication that 
can be avoided by using functions.

const nameOne = 'Shafin';
const nameTwo = 'Amina';

console.log(`Hello ${nameOne}, Good Evening`);
console.log(`Hello ${nameTwo}, Good Evening`);
*/

// ---------------------------------------
// 3. JS EXECUTION MODEL (Simplified)
// ---------------------------------------
// Memory Phase:
//   - JS stores variables & functions
// Execution Phase:
//   - JS runs code line-by-line
//   - Jumps into function body when called

// ---------------------------------------
// 4. MULTIPLE PARAMETERS
// ---------------------------------------

function addNumber(num1, num2) {
  console.log(num1 + num2);
}

addNumber(300, 500); // Output: 800

// ---------------------------------------
// 5. RETURN KEYWORD & FUNCTION SCOPE
// ---------------------------------------

function cardPayment(cardNumber) {
  // Simulating a payment process
  console.log('Payment Started');
  console.log('Payment Completed');

  const cN = 'Fida'; // Local variable (function scope)
  return cN; // Returning a value
}

function printBill(cardName) {
  console.log(`Payment done for ${cardName}`);
}

const cardName = cardPayment(1234); // cardPayment returns a value
printBill(cardName); // Using that returned value

// ---------------------------------------
// 6. FUNCTION SCOPE
// ---------------------------------------
// Variables declared inside a function are not accessible outside.

// Example:
// function test() {
//   const secret = "hidden";
// }
// console.log(secret); // ❌ Error — secret is out of scope

// ---------------------------------------
// 7. TERNARY OPERATOR
// ---------------------------------------

// Long form:
// let passed;
// if (marks > 40) {
//   passed = true;
// } else {
//   passed = false;
// }

// Equivalent short form:
const marks = 75;
let passed = marks > 40 ? true : false;

console.log(passed); // true
