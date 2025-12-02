// main, makePayment, print

main();

function main() {
  function print() {
    console.log('Payment Done');
  }

  makePayment(print);
}

function makePayment(f) {
  // making the payment
  f();
}
