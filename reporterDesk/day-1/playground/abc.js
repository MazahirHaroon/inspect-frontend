const heading = document.getElementById('heading');
heading.textContent = 'Something else';
heading.style.color = 'red';

console.log("Reporter's Desk Script");

// string
const name = 'Naveen';
const number = 123;
const isOnline = true;

// 0, 1, 2
const list = ['a', 'b', 'c', 2, 4, name];
console.log(list[0]);
console.log(list[3]);

const userInput = 'name';

const person = {
  name: 'Naveen',
  place: 'Toronto',
  phoneNumber: 1234,
  1: 'sdd',
};

console.log(person.name);
console.log(person.place);

console.log(person[1]);

const anotherHeading = document.getElementsByTagName('h1');
console.log(anotherHeading);
