/*
------------------------------
Links: 

- Anynote link: https://any.coop/AB2DLqz9p8Fk7KCdSnkivxZPhPYw9K3ecArpX5jqcEj7Yuga/day-2-inspect-frontend-javascript-crash-course

------------------------------
*/

// Based on how it is Stored & Accessed from Memory

// Primitives

// 7 : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is Dynamically Typed
// Variable Name & Camelcase

// Strings
const name = 'Rena';
const favoriteMovie = 'Lapataa ladies';

// Numbers
let phoneNumber = 1234567890;
const rollNumber = 101;
const price = 51.7;

// BigInt
const largeNumber = 9007199254740991n;

// Boolean
const isOnline = false;

// null and undefined
const currentBalance = null;
let username; // undefined

console.log('123 === 123 ->', 123 === 123);

console.log('Symbol equality ->', Symbol('123') === Symbol('123')); // false

// Reference types (non-primitives)
// Array
const districts = ['Ernakulam', 'Thiruvananthapuram', 'Kozhikode'];

// Object
const districtDetails = {
  name: 'Ernakulam',
  state: 'Kerala',
  population: 3279860,
  headquarters: 'Kakkanad',
};

/* Exercises:

1.⁠ ⁠Create one variable for each data type listed below. (You can skip Symbol and BigInt for now.)

2.⁠ ⁠Use console.log() to show the value and use typeof to check its data type.

3.⁠ ⁠Print something fun using these data types. It can be similar to the example below, but try to use more data types together!

const name = “Mazahir”;
const city = ‘Kochi;

console.log("My name is", name);
console.log("I live in", city);

- Mutate districts array and districtDetails object to show that references are mutable.

*/
