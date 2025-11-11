// Input
const borrowed = [
  { title: 'Alchemist', borrower: 'Naveen' },
  { title: 'Atomic Habits', borrower: 'Mazahir' },
  { title: 'Odyssey', borrower: 'Naveen' },
];

/* Expected Output
['Title: Alchemist', 'Title: Atomic Habits', 'Title: Odyssey'];
*/

// Solution

const newArray = borrowed.map(getTitle);

function getTitle(book) {
  const formatted = `Title: ${book.title}`;
  return formatted;
}

console.log(newArray);
