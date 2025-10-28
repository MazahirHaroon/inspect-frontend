/*
Notes: https://any.coop/AB2DLqz9p8Fk7KCdSnkivxZPhPYw9K3ecArpX5jqcEj7Yuga/day-2-library-management-javascript-react-crash-course 
*/

// Our main object — represents the Library system
const ekmLibrary = {
  name: 'Ernakulam Public Library',
  location: 'Convent Rd, Kochi, Ernakulam',
  totalBooks: 200000,
  isOpen: true,
  borrowedBooks: [], // 👈 this is an array that will hold multiple borrowed book objects
};

// Handle button click
document.getElementById('submitBtn').addEventListener('click', function () {
  // Step 1: Get input values and assign them to variables
  const title = document.getElementById('bookTitle');
  const borrower = document.getElementById('borrowerName');
  const days = document.getElementById('daysBorrowed');

  // Step 2: Create a new book object using its values
  const borrowedBook = {
    title: title,
    borrower: borrower,
    daysBorrowed: days,
  };

  // Step 3: Push this new object into the 'borrowedBooks' array inside 'library' object
  ekmLibrary.borrowedBooks.push(borrowedBook);

  // Step 4: Show the updated object structure on the page
  // document.getElementById('output').textContent = JSON.stringify(
  //   ekmLibrary,
  //   null,
  //   2
  // );
  console.log(ekmLibrary);

  // Step 5: Clear inputs
  document.getElementById('bookTitle').value = '';
  document.getElementById('borrowerName').value = '';
  document.getElementById('daysBorrowed').value = '';

  // (New Step) Step 6: Show the updated object structure on the page
  displayBorrowedBooks();
});

// Function to display borrowed books in a readable way
function displayBorrowedBooks() {
  const list = document.getElementById('bookList');
  list.innerHTML = ''; // clear old list

  // Loop through borrowedBooks array
  ekmLibrary.borrowedBooks.forEach(function (book, index) {
    const listItem = document.createElement('li');
    listItem.textContent = `#${index + 1} — "${book.title}" borrowed by ${
      book.borrower
    } for ${book.daysBorrowed} days.`;
    list.appendChild(listItem);
  });
}
