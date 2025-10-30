const ekmLibrary = {
  name: 'Ernakulam Public Library',
  location: 'Convent Rd, Kochi, Ernakulam',
  totalBooks: 200000,
  isOpen: true,
  borrowerList: [],
};

// Add heading. "Borrowed Books"
// const output = document.querySelector('#output');

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

  console.log(
    `${borrowerNameValue} borrowed ${bookTitleValue} for ${daysBorrowedValue} days ago`
  );

  /*
  1. Select output HTML element
  2. Creating a paragraph element
  3. Adding text to that paragraph
  */

  /*
  Example Output
  <div id="output">
    <h3> Borrowed Books </h3>
    <p>Naveen borrowed ABC 3 days ago</p>
  </div>
 */

  const output = document.querySelector('#output');
  const paragraph = document.createElement('p');

  // textContent
  const finalOutput = `${borrowerNameValue} borrowed ${bookTitleValue} for ${daysBorrowedValue} days ago`;
  paragraph.textContent = finalOutput;

  output.appendChild(paragraph);

  ekmLibrary.borrowerList.push(borrowerDetails);
  console.log(ekmLibrary.borrowerList);

  bookTitle.value = '';
  borrowerName.value = '';
  daysBorrowed.value = '';
}

/*
Example Data
ekmLibrary {
  borrowelist: [
    {
      borrowerName: 'Naveen',
      bookTitle: 'Atomic Habits',
      daysBorrowed: '3',
    },
    {
      borrowerName: 'Mazahir',
      bookTitle: 'ABC',
      daysBorrowed: '213',
    },
  ];
}
..

*/

document.querySelector('#getAllData').addEventListener('click', printData);

function printData() {
  /*
  Task: 
  - Print all the details inside the ekmLibrary.borrowerList array
  - In this Format 
     'Naveen borrowed Atomic Habits 3 days ago';
     'Mazahir borrowed EFG 3 days ago';

  Steps:
  
  */
}
