/*
// Using async/await

1. Mark a function as `async` to allow the use of the `await` keyword inside it.

2. When you use `await` on a Promise, JavaScript pauses the function until the 
   Promise settles.

3. If the Promise resolves successfully, `await` returns the resolved value 
   and execution continues.

4. If the Promise is rejected, an error is thrown at the point of the `await`.

5. Use a `try...catch` block to handle both outcomes:

   * The `try` block runs when the Promise resolves.
   * The `catch` block runs when the Promise is rejected.

6. This approach makes asynchronous code look and behave more like synchronous code, 
   improving readability and flow.

*/

async function main() {
  try {
    const response = await getUser();
    console.log('Resolved:', response);
  } catch (error) {
    console.log('Rejected:', error);
  }
}

function getUser() {
  return new Promise((a, b) => {
    const number = 1;

    if (number === 1) {
      a('Success');
    } else {
      b('Error: Something went wrong');
    }
  });
}

main();

/*
// With Proper parameter/variable names  

async function main() {
  try {
    const response = await getUser();
    console.log('Resolved:', response);
  } catch (error) {
    console.log('Rejected:', error);
  }
}

function getUser() {
  return new Promise((resolve, reject) => {
    const number = 1;

    if (number === 1) {
      resolve('Success');
    } else {
      reject('Error: Something went wrong');
    }
  });
}

main();
*/
