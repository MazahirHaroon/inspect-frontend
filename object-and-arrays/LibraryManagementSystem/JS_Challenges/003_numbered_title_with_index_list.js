/*
Build numbered titles list 
- Scenario: Create a numbered array of book titles for a simple report.
- Task: Produce an array titlesList such that each element is #<index> - <title> (index starts at 1).

*/

// Input
const borrowed = [
  { title: 'Alchemist', borrower: 'Naveen' },
  { title: 'Atomic Habits', borrower: 'Mazahir' },
  { title: 'Odyssey', borrower: 'Naveen' },
];

/* Expected Output
['#1 - Alchemist', '#2 - Atomic Habits', '#3 - Odyssey'];
*/

// Solution
const titlesList = [];

borrowed.forEach((book, index) => {
  const formatted = `#${index + 1} - ${book.title}`;
  titlesList.push(formatted);
});

console.log(titlesList);
