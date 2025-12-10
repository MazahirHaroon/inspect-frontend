// Playground - today's notes (10th December)

/*
- Function definition, call
- parameter, arguments
- return
*/

// Input => Machine => Output

// Solves Code Duplication
/*
const nameOne = 'Shafin';
const nameTwo = 'Amina';

console.log(`Hello ${nameOne}, Good Evening`);
console.log(`Hello ${nameTwo}, Good Evening`);
*/

function printGreeting(name) {
  console.log(`Hello ${name}, Good Evening`);
}

const nameOne = 'Shafin';
const nameTwo = 'Amina';

printGreeting(nameOne);

printGreeting(nameTwo);

// JS Execution
// Memory Phase
// Memory -> function -> printGreeting
// Execution Phase

/*
// function definition
function printGreeting(y) {
  // parameter
  console.log(`Hello ${y}, Good Evening`);
}
// ends here

/// function call (invoke)
printGreeting(nameOne); // function call with argument
printGreeting(nameTwo); // function call with argument

// Output
// Hello Shafin, Good Evening!
// Hello Amina, Good Evening!
*/

// Two arguments/parameters

function addNumber(num1, num2) {
  console.log(num1 + num2);
  // console.log(num1, num2);
}

const valueOne = 300;
const valueTwo = 500;

addNumber(valueOne, valueTwo);

// Return Keyword & Scope

function cardPayment(cardNumber) {
  // Mimicking an actual payment process
  console.log('Payment Started');
  console.log('Payment Completed');
  const cN = 'Fida';
  console.log('Hello 1');
  return cN;
}

function printBill(cardName) {
  console.log(`Payment done for ${cardName}`);
}

const cardName = cardPayment(1234);
printBill(cardName);

// Ternary Operator

/*
const marks = 75;
let passed;

if (marks > 40) {
  passed = true;
} else {
  passed = false;
}

console.log(passed);
*/

// Above code can be replaced by:

const marks = 75;
let passed = marks > 40 ? true : false;
console.log(passed);
