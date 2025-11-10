/* 
Count books per borrower

- Scenario: Count how many borrowed records each borrower has in the list.
- Task: Create an object counts where keys are borrower names and values are the number of books 
  they currently have borrowed.
*/

// Input
const borrowed = [
  { name: 'Naveen', book: 'Alchemist' },
  { name: 'Mazahir', book: 'Atomic Habits' },
  { name: 'Naveen', book: 'Odyssey' },
];

/* Expected Output
 { Naveen: 2, Mazahir: 1 }
*/
