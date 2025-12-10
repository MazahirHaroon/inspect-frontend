/* 
Using .then() and .catch()

1. Call the .then() method on a Promise that you want to handle.

2. Inside .then(), provide a function that will run when the Promise 
  resolves successfully.

3. This success function automatically receives the resolved value 
  from the Promise.

4. If the Promise is rejected, .then() will not run — instead, .catch() will 
   handle the error.

5. Call .catch() after .then() and pass a function that will run 
   when the Promise is rejected.

6. The function inside .catch() automatically receives the error 
   value from the Promise.

7. This separation allows cleaner code, where successful and failed outcomes are handled in
    two clearly defined steps.

- .then() runs when the Promise resolves successfully.
- .catch() runs when the Promise is rejected.
*/

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

getUser()
  .then((x) => {
    console.log('Resolved:', x);
  })
  .catch((y) => {
    console.log('Rejected:', y);
  });

/*
// With Proper parameter/variable names  

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

getUser()
  .then((result) => {
    console.log('Resolved:', result);
  })
  .catch((error) => {
    console.log('Rejected:', error);
  });
*/
