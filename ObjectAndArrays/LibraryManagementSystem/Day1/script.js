/*
- Notes: https://any.coop/AB2DLqz9p8Fk7KCdSnkivxZPhPYw9K3ecArpX5jqcEj7Yuga/day-1-library-management-javascript-react-crash-course
*/

// Our main object — represents the Library system
const ekmLibrary = {
  name: 'Ernakulam Public Library',
  location: 'Convent Rd, Kochi, Ernakulam',
  totalBooks: 200000,
  isOpen: true,
  borrowedBooks: [], // 👈 this is an array where each entry will be an object
};

// Handle the click event
document.getElementById('submitBtn').addEventListener('click', function () {
  /* Here we discuss about DOM
  1. Show them how we can access DOM like document.body.children[0]. ..
  2. Tell them how querySelector/get..By.. methods makes it easier.
  */

  // Step 1: Get input values and assign them to variables
  const title = document.getElementById('bookTitle');
  const borrower = document.getElementById('borrowerName');
  const days = document.getElementById('daysBorrowed');

  /*
  1. Before creating an object, push string (borrower) value to the object
  2. Show them how having multiple entry with same borrower name can be confusing
   and we need more details.
  3. Then show object with hardcoded values.
  4. Then show objects with variable values.
  */

  // Step 2: Create a new book object using its values
  const borrowedBook = {
    title: title.value,
    borrower: borrower.value,
    daysBorrowed: days.value,
  };

  // Step 3: Push this new object into the 'borrowedBooks' array inside 'library' object
  library.borrowedBooks.push(borrowedBook);

  // Step 4: Show the updated object structure on the page
  // document.getElementById('output').textContent = JSON.stringify(
  //   library,
  //   null,
  //   2
  // );
  console.log(ekmLibrary);

  // Step 5: Clear the inputs for next entry
  document.getElementById('bookTitle').value = '';
  document.getElementById('borrowerName').value = '';
  document.getElementById('daysBorrowed').value = '';
});
