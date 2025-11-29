// JS Visualizer: https://www.jsv9000.app/

// A simple function that prints a message.
// This will be executed LATER when setTimeout triggers it.
function delayFunction() {
  console.log('Say Hi after 4 seconds');
}

let sum = 0;

// A heavy loop function (simulating long-running code).
// This blocks the main thread and delays everything that comes after it.
function loopFunction() {
  for (let i = 0; i < 1000000; i++) {
    sum = i + sum; // keeps adding numbers
  }
  console.log(sum); // prints the final result
}

// Two small functions
function function1() {
  console.log('We are running');
}

function function2() {
  console.log('End');
}

console.log('Timer started');

/* --------------------- */

// These two setTimeout calls schedule delayFunction to run AFTER 4 seconds.
// But they do NOT run immediately — they go to the Web API queue.
setTimeout(delayFunction, 4000);
setTimeout(delayFunction, 4000);

// This function takes time (heavy loop), blocking the event loop.
// So even though setTimeout was set to 4 seconds, the callbacks
// MUST wait for the call stack to become empty.
loopFunction(); // <-- blocks the main thread for >5 seconds

// These execute immediately after loopFunction finishes.
function1();
function2();

/*
What actually happens:

1) "Timer started" is logged.
2) Two timers are scheduled for 4 seconds in the Web API.
3) loopFunction() runs → takes more than 4 seconds → blocks JS thread.
4) After it finishes, the call stack becomes free.
5) Only then can the setTimeout callbacks move into the call stack.
6) delayFunction() logs twice ("Say Hi after 4 seconds")

This teaches:
- JS is single-threaded
- Long tasks delay async callbacks
- setTimeout is NOT guaranteed to run exactly on time
*/
