// We call main() first
main();

// JavaScript reads this function and stores "main" in memory
function main() {
  // JavaScript also stores "print" in memory (but this one lives inside main)
  function print() {
    console.log('Payment Done');
  }

  // We pass the print function as an argument (this is the callback)
  makePayment(print);
}

// JavaScript stores "makePayment" in memory too
function makePayment(f) {
  // f represents the function we passed in (print)
  // so calling f() will run print()
  f();
}

/*
How JavaScript sees this code:

1. Before running anything, JS scans the whole file and stores:
   - main
   - makePayment
   - (and print, but only inside main)

2. Execution starts:
   main() is called.

3. Inside main:
   - print() is defined.
   - makePayment(print) is called.
     Here, "print" is passed as a function (NOT executed yet).

4. Inside makePayment:
   - f refers to the same "print" function stored earlier.
   - f() runs print(), so "Payment Done" gets logged.

Key idea:
A callback is just a function passed to another function.
JS knows what "f" means because the original function (print)
was already stored in memory before execution.
*/
