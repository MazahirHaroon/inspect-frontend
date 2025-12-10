function printBill() {
  console.log('Print Bill');
}

makePayment(printBill);

/*
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
..

*/
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
