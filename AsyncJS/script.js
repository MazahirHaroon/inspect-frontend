// Memory -> main, makePayment, print
// 1. Memory Phase 2. Execution Phase

main();

function main() {
  function print() {
    console.log('Print Bill');
  }
  makePayment(print);
}

function makePayment(f) {
  console.log('Payment Started');
  // // Data Fetching - Browser please take care of this and let me know when it ends.
  console.log('Payment Completed');
  f();
}
