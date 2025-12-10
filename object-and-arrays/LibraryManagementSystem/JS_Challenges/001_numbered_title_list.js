/*
Build numbered titles list 
- Scenario: Create a numbered array of book titles for a simple report.
- Task: Produce an array titlesList such that each element is `Title: <title>`.

*/

// Input
const borrowed = [
  { title: 'Alchemist', borrower: 'Naveen' }, //0
  { title: 'Atomic Habits', borrower: 'Mazahir' }, //1
  { title: 'Odyssey', borrower: 'Naveen' }, //2
];

/* Expected Output
['Title: Alchemist', 'Title: Atomic Habits', 'Title: Odyssey'];
*/

// Solution
const titlesList = [];

borrowed.forEach((book) => {
  const formatted = `${book.title}`;
  titlesList.push(formatted);
});

console.log(titlesList);
