const borrowed = [
  { title: 'Alchemist', borrower: 'Naveen' },
  { title: 'Alchemist', borrower: 'Mazahir' },
  { title: 'Atomic Habits', borrower: 'Mazahir' },
  { title: 'Odyssey', borrower: 'Naveen' },
];
// Task: Get the details of the book Alchemist.

// [Find]['Alchemist'] -> Details of who borrowed the book.
// Finds the first one that matches.

const found = borrowed.find((book) => {
  if (book.title === 'Alchemist') {
    return true;
  }
});

console.log(found);
