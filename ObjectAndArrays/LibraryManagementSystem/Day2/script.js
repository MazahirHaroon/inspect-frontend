/*
Notes: https://any.coop/AB2DLqz9p8Fk7KCdSnkivxZPhPYw9K3ecArpX5jqcEj7Yuga/day-2-library-management-javascript-react-crash-course 
*/

// Our main object — represents the Library system
const library = {
  name: 'Greenwood Public Library',
  location: 'Main Street, Springfield',
  totalBooks: 1200,
  isOpen: true,
  borrowedBooks: [], // 👈 this is an array that will hold multiple borrowed book objects
};

// Handle button click
document.getElementById('submitBtn').addEventListener('click', function () {
  // Step 1: Get input values
  const title = document.getElementById('bookTitle').value;
  const borrower = document.getElementById('borrowerName').value;
  const days = document.getElementById('daysBorrowed').value;

  // Step 2: Create a new object for this borrowed book
  const borrowedBook = {
    title: title,
    borrower: borrower,
    daysBorrowed: days,
  };

  // Step 3: Push it into the borrowedBooks array
  library.borrowedBooks.push(borrowedBook);

  // Step 4: Update the visual list of borrowed books
  displayBorrowedBooks();

  // Step 5: Show the full object (for understanding structure)
  document.getElementById('output').textContent = JSON.stringify(
    library,
    null,
    2
  );

  // Step 6: Clear inputs
  document.getElementById('bookTitle').value = '';
  document.getElementById('borrowerName').value = '';
  document.getElementById('daysBorrowed').value = '';
});

// Function to display borrowed books in a readable way
function displayBorrowedBooks() {
  const list = document.getElementById('bookList');
  list.innerHTML = ''; // clear old list

  // Loop through borrowedBooks array
  library.borrowedBooks.forEach(function (book, index) {
    const listItem = document.createElement('li');
    listItem.textContent = `#${index + 1} — "${book.title}" borrowed by ${
      book.borrower
    } for ${book.daysBorrowed} days.`;
    list.appendChild(listItem);
  });
}
