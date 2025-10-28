const ekmLibrary = {
  name: 'Ernakulam Public Library',
  location: 'Convent Rd, Kochi, Ernakulam',
  totalBooks: 200000,
  isOpen: true,
  borrowerList: [],
};

const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', getData);

function getData() {
  const bookTitle = document.querySelector('#bookTitle');
  const bookTitleValue = bookTitle.value;

  const borrowerName = document.querySelector('#borrowerName');
  const borrowerNameValue = borrowerName.value;

  const daysBorrowed = document.querySelector('#daysBorrowed');
  const daysBorrowedValue = daysBorrowed.value;

  const borrowerDetails = {
    borrowerName: borrowerNameValue,
    bookTitle: bookTitleValue,
    daysBorrowed: daysBorrowedValue,
  };

  ekmLibrary.borrowerList.push(borrowerDetails);
  console.log(ekmLibrary);

  bookTitle.value = '';
  borrowerName.value = '';
  daysBorrowed.value = '';
}
