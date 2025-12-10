// main, makePayment, print
let sum = 0;
main();

function main() {
  // A simple function that prints the bill
  function print() {
    console.log('Print Bill');
  }

  // Calling makePayment and passing print as a callback
  // This request will take time because it uses an API call.
  makePayment(print);

  // ----------------------------
  // HEAVY LOOP (Blocks JS Thread)
  // ----------------------------
  // This loop simulates heavy work.
  // Because JavaScript is single-threaded, the main thread will be BUSY
  // until this entire loop finishes.
  //
  // ❗ Important:
  // Even if the payment API responds quickly…
  // the callback WON’T run immediately.
  // Why?
  // Because the callback must wait in the TASK QUEUE until
  // the CALL STACK becomes EMPTY.
  //
  // This loop keeps the call stack busy for a long time.
  for (let i = 0; i < 1000000000; i++) {
    sum = i + sum;
  }

  // After the loop finishes, the call stack becomes free.
  console.log(sum);
}

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
.
.
.
.
.
.
.
.
*/
function makePayment(f) {
  console.log('Payment Process Started');

  // ---------------------------------------------------------
  // ASYNC OPERATION (handled by the browser/Web API)
  // ---------------------------------------------------------
  // XMLHttpRequest is asynchronous.
  // When xhr.send() happens, the browser handles the request.
  // JavaScript does NOT wait here.
  //
  // When the response comes back:
  //  → onload callback is moved to the TASK QUEUE.
  //  → It will execute ONLY when JS call stack becomes EMPTY.
  // ---------------------------------------------------------

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');

  xhr.onload = function () {
    console.log('Payment Completed');
    f(); // callback runs AFTER the main thread becomes free
  };

  xhr.onerror = function () {
    console.log('Payment failed');
  };

  xhr.send();

  // The async request is now handled by the browser.
  // JavaScript continues running the rest of main() immediately.
}
