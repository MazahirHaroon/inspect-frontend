// Playground - today's notes (15th December)

/*
- forEach();
- map();
- filter();
- find();
*/

const alphabets = ['A', 'B', 'C', 'C', 'D', 'E'];
const users = [
  { name: 'Shafin', id: 1 },
  { name: 'Amina', id: 2 },
];
let response;
let myArray;

// forEach
users.forEach(getDetails);

const newArray = users.map(getDetails);
console.log(newArray);

function getDetails(value, index) {
  console.log(`The name is: ${value.name}. Index is ${index}`);
}

// map
newArray = alphabets.map(greet);
console.log(newArray);

function greet(value, index) {
  console.log(value, index);
  return value.toLowerCase();
  // return `Student: ${value}`;
}

// filter

newArray = alphabets.filter(removeC);

console.log(newArray);

function removeC(value, index) {
  if (value === 'C') {
    return false;
  } else {
    return true;
  }
}

// find

function findC(value) {
  if (value === 'C') {
    return true;
  }
}

function findY(value) {
  if (value === 'Y') {
    return true;
  }
}

response = alphabets.find(findC);
console.log(response);

response = alphabets.find(findY);
console.log(response);

// find (2)
response = users.find(findAmina);

function findAmina(value) {
  if (value.name === 'Amina') {
    return true;
  }
}

// map (2)
newArray = users.map(getName);

function getName(value) {
  return value.name;
}
console.log(newArray);
