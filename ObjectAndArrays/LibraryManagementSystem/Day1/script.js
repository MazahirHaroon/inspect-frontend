/*
- Notes: https://any.coop/AB2DLqz9p8Fk7KCdSnkivxZPhPYw9K3ecArpX5jqcEj7Yuga/day-1-library-management-javascript-react-crash-course
*/

// Our main object — represents the Library system
const library = {
  name: 'Ernakulam Public Library',
  location: 'Convent Rd, Kochi, Ernakulam',
  totalBooks: 200000,
  isOpen: true,
  borrowedBooks: [], // 👈 this is an array where each entry will be an object
};

// Handle the click event
document.getElementById('submitBtn').addEventListener('click', function () {
  // Step 1: Get input values and assign them to variables
  const title = document.getElementById('bookTitle').value;
  const borrower = document.getElementById('borrowerName').value;
  const days = document.getElementById('daysBorrowed').value;

  // Step 2: Create a new book object using those values
  const borrowedBook = {
    title: title,
    borrower: borrower,
    daysBorrowed: days,
  };

  // Step 3: Push this new object into the 'borrowedBooks' array inside 'library'
  library.borrowedBooks.push(borrowedBook);

  // Step 4: Show the updated object structure on the page
  document.getElementById('output').textContent = JSON.stringify(
    library,
    null,
    2
  );

  // Step 5: Clear the inputs for next entry
  document.getElementById('bookTitle').value = '';
  document.getElementById('borrowerName').value = '';
  document.getElementById('daysBorrowed').value = '';
});
