fetch('https://jsonplaceholder.typicode.com/todos')
  .then((c) => {
    return c.json();
  })
  .then((c) => {
    console.log(c);
  })
  .catch((c) => {
    console.log('Error', c);
  });

// 1. How to create and return a promise
function getUser() {
  return new Promise((a, b) => {
    if (1 === 1) {
      a('Mazahir');
    } else {
      b('Something went wrong');
    }
  });
}

// 2. How we consume it.
const response = getUser()
  .then((c) => {
    console.log('User:', c);
  })
  .catch((c) => {
    console.log('Error', c);
  });

function printBill() {
  console.log('Print Bill');
}

/*
--------------------------------------------
*/
// Callback Notes

makePayment(printBill);

function makePayment(printBill) {
  console.log('Payment Process Started');

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');

  xhr.onload = function () {
    console.log('Payment Completed');
    printBill(); // print only when XHR finishes
  };

  xhr.onerror = function () {
    console.log('Payment failed');
  };

  xhr.send();
}
