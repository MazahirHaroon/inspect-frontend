/* ============================================================
   PROMISE → ASYNC / AWAIT (WITH NOTES)
   ============================================================ */

/*
Notes for Creating a Promise

1. A Promise is created using the `new Promise()` constructor.

2. The Promise constructor takes a function with two parameters
   (`a` and `b` in this example).

3. The function passed to `new Promise()` runs immediately
   when the Promise is created.

4. Calling `a(value)` resolves the Promise successfully
   with that value.

5. Calling `b(error)` rejects the Promise
   with an error value.

6. A Promise can be resolved or rejected only once.
*/

function getUser() {
  return new Promise((a, b) => {
    if (1 === 1) {
      a('Mazahir');
    } else {
      b('Something went wrong');
    }
  });
}

/*
Notes for async / await

7. An `async` function always returns a Promise.

8. `await` pauses the execution of the async function
   until the Promise is settled (resolved or rejected).

9. `await` does NOT block JavaScript —
   it only pauses the async function itself.
*/

async function main() {
  /*
  Notes for Execution Flow

  10. Code inside this function runs synchronously
      until it reaches the first `await`.

  11. When `await getUser()` is reached:
      - JavaScript exits this function temporarily
      - waits for the Promise to settle
  */

  try {
    const c = await getUser();
    /*
    Notes for await success

    12. If the Promise is resolved,
        `await` returns the resolved value.

    13. The value passed to `a()` is assigned to `c`.

    14. In this case, `c` receives `'Mazahir'`.
    */
    console.log('User:', c);
  } catch (c) {
    /*
    Notes for await error handling

    15. If the Promise is rejected,
        control jumps directly to `catch`.

    16. The value passed to `b()` is received here.

    17. This `catch` block is equivalent to `.catch()` in Promise chaining.
    */
    console.log('Error:', c);
  }
}

/*
Notes outside the async function

18. `console.log('start')` runs first
    because it is synchronous code.

19. Calling `main()` starts the async function,
    but does not block the rest of the program.
*/

console.log('start');
main();
console.log('end');

/*
Expected Output Order

start
end
User: Mazahir

Key Teaching Line:
`async / await` is just cleaner syntax on top of Promises —
the underlying behavior does not change.
*/
