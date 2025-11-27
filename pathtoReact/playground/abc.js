// Playground - today's notes (27 November)

// declaration / initialization
const name = 'Shaba';
const birthYear = 1995;
let balance = 2000;
balance = 3000;

// string, number, boolean

const isLoggedIn = false;
const hasSubmitted = true;

// null, undefined
// hardware is updating (5 min);
const temperature = null;

let newValue;
console.log(newValue);
newValue = 13;
console.log(newValue);

// array
const firstMovie = 'Lokah';
const secondMovie = '3 idiots';
const thirdMovie = 'F1';

const mazahirFavoriteMovie = ['Lokah', '3 idiots', 'F1'];
const numbers = [1, 2, 3];
const random = [1, 'I can put', null, false];

// object

const firstName = 'Mazahir';
const lastName = 'Haroon';
const rollNo = 123;
const favoriteMovies = ['Lokah', '3 idiots', 'F1'];

const mazahirDetails = {
  firstName: 'Mazahir',
  lastName: 'Haroon',
  rollNo: 123,
  favoriteMovies: ['Lokah', '3 idiots', 'F1'],
};

// Template literals

const namePartA = 'John';
const namePartB = 'Doe';

// Hello John Doe;
// console.log('Hello John Doe');
// console.log('Hello', namePartA, namePartB);

// const greetings = 'Hello' + ' ' + namePartA + ' ' + namePartB;

const greetings = `Hello ${namePartA} ${namePartB}`;
console.log(greetings);
