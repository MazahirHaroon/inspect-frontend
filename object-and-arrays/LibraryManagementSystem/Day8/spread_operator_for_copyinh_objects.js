const torontoResidentDetails = {
  name: null,
  place: 'Toronto',
  pinCode: 123,
  country: 'Canada',
};

// First User
const userInput1 = 'Naveen';
const firstPerson = { ...torontoResidentDetails }; // proper copy

// Second User
const userInput2 = 'Mazahir';
const secondPerson = { ...torontoResidentDetails }; // proper copy
secondPerson.name = userInput2;

// ---------

// Print
console.log(firstPerson === secondPerson);
console.log('First: ', firstPerson);
console.log('Second: ', secondPerson);
