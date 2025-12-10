/* 
Update Borrower Book Counts

- Scenario: You have a list of borrowed books.
  Each entry contains the borrower's name and the book title.
  You also have an object that already stores how many books each person has borrowed so far.

- Task: Go through the borrowed list one by one (using a loop or forEach),
  and update the bookCounts object by adding +1 for each book borrowed by that person.
*/

// Input
const borrowed = [
  { name: 'Naveen', book: 'Alchemist' },
  { name: 'Mazahir', book: 'Atomic Habits' },
  { name: 'Naveen', book: 'Odyssey' },
  { name: 'Shiv', book: 'You Can Win' },
];

// This object tracks how many books each borrower currently has.
const bookCounts = {
  Naveen: 0,
  Mazahir: 0,
  Shiv: 0,
  Ramesh: 0,
};

/* Expected Output
const bookCounts = {
  Naveen: 2,
  Mazahir: 1,
  Shiv: 1,
  Ramesh: 0,
};
*/

borrowed.forEach((entry) => {
  const name = entry.name;
  bookCounts[name] = bookCounts[name] + 1;
});

console.log(bookCounts);
