// Example 1

const myArray = [45, 33, 22, 10];

const expensiveArray = myArray.filter(print);

function print(e) {
  if (e > 30) {
    return true;
  } else {
    return false;
  }
}

console.log(expensiveArray);

// Expected | > 30
// const expensive = [45,33]

// Example 2
// const myArray = [45, 33, 22, 10];
// forEach, 2 , filter, 2 (1 answer)

const bookList = [
  {
    name: 'Naveen',
    days: 12,
    book: 'Alchemist',
  },
  {
    name: 'Mazahir',
    days: 40,
    book: 'Atomic Habits',
  },
  {
    name: 'Naveen',
    days: 12,
    book: 'Odyssey',
  },
];
const naveenList = bookList.filter(getNaveensBooks);

function getNaveensBooks(person) {
  if (person.name === 'Naveen') {
    return true;
  } else {
    return false;
  }
}

console.log(naveenList);

// Expected | name === 'Naveen'
/* 
const expensive = [
  { name: 'Naveen', days: 12, book: 'Alchemist' },
  { name: 'Naveen', days: 12, book: 'Odyssey' }
]
*/
