/* ============================================================
   PROMISE CREATION + THEN / CATCH (WITH NOTES)
   ============================================================ */

/*
Notes for Creating and Using a Promise

1. A Promise is created using the `new Promise()` constructor.

2. The Promise constructor takes a function with two parameters
   (`a` and `b` in this example).

3. The function passed to `new Promise()` runs immediately
   when the Promise is created.

4. Calling `a(value)` means the Promise is resolved successfully
   with that value.

5. Calling `b(error)` means the Promise is rejected
   with an error value.

6. A Promise can be resolved or rejected only once.

7. In this example, since `1 === 1` is true,
   `a('Mazahir')` is called and the Promise is resolved.
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
Notes for Execution Flow

8. `console.log('start')` runs first because it is synchronous code.

9. `getUser()` is called next, which immediately creates a Promise.

10. Even though `a('Mazahir')` is called immediately,
    the `.then()` callback does NOT run right away.

11. Promise callbacks (`.then()` / `.catch()`) run asynchronously,
    after the current call stack is finished.

12. `console.log('end')` runs before `.then()` for this reason.
*/

console.log('start');

const response = getUser()
  .then((c) => {
    /*
    Notes for .then()

    13. The anonymous function inside `.then()` runs
        only when the Promise is resolved.

    14. This function automatically receives the value
        passed to `a()`.

    15. In this case, `c` receives `'Mazahir'`.
    */
    console.log('User:', c);
  })
  .catch((c) => {
    /*
    Notes for .catch()

    16. The anonymous function inside `.catch()` runs
        only when the Promise is rejected.

    17. This function automatically receives the value
        passed to `b()`.

    18. Since the Promise is resolved here,
        this block will NOT run.
    */
    console.log('Error:', c);
  });

console.log('end');

/*
Expected Output Order

start
end
User: Mazahir


- Creating a Promise is synchronous,
- but handling its result 
  with `.then()` or `.catch()` is asynchronous.
*/
