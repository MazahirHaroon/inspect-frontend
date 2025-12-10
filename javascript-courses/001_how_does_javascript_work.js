/*
------------------------------
Links: 

- YouTube Video Link: https://www.youtube.com/watch?v=-KtDqkn-msw
- Anynote link: https://any.coop/AB2DLqz9p8Fk7KCdSnkivxZPhPYw9K3ecArpX5jqcEj7Yuga/day-1-inspect-frontend-javascript-crash-course

Notes:
- Try `console.log(this)` in browser console (open page with this script) and in Node to see difference.
- We demonstrate var/let/const and accidental globals.

------------------------------
*/

// console.log(this); // try printing this with both browser and node.

const name = 'React';
let version = 19;

// let vs const
let fullName = 'Mazahir B';
fullName = 'Mazahir B Haroon'; // allowed

const role = 'Student';
// role = "Mentor"; // not allowed — will throw in strict mode

// bad practice: accidental global (same as var in non-strict mode)
phoneNumber = 1234567890; // Avoid this — use let/const/var explicitly

/* Small exercises:

 1. Open browser console and try: addTask('Buy banana chips');
 2. In Node run: node 01-how-js-works.js and check `this` behavior.

*/
