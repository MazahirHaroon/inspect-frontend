/* 
Movies: Get Highly Rated Action Films

- Scenario: You are building a movie recommendation app. The app should only show action movies that 
  have a rating above 8.
- Task: Create an object counts where keys are borrower names and values are the number 
  of books they currently have borrowed.
*/

// Input
const movies = [
  { title: 'Inception', rating: 9, genre: 'Action' },
  { title: 'Barbie', rating: 7, genre: 'Comedy' },
  { title: 'John Wick', rating: 8.5, genre: 'Action' },
  { title: 'Oppenheimer', rating: 9, genre: 'Drama' },
];

/* Expected Output
[
  { title: 'Inception', rating: 9, genre: 'Action' },
  { title: 'John Wick', rating: 8.5, genre: 'Action' }
]
*/
