/*
------------------------------
Links: 

- Anynote link: https://any.coop/AB2DLqz9p8Fk7KCdSnkivxZPhPYw9K3ecArpX5jqcEj7Yuga/day-4-inspect-frontend-javascript-crash-course

------------------------------
*/

// ----------------------------
// 1) Function
// ----------------------------

function printProduct(productName, productDetails) {
  console.log('Product name:', productName);
  console.log('Details:', productDetails);
  // no return -> function implicitly returns `undefined`
}

printProduct('Snickers Packet', {
  brand: 'Fresh Snacks',
  weight: '250g',
  price: 130,
});

// If we try to capture return value:
const resultNoReturn = printProduct('Hazelnut Chocolate', {
  brand: 'SweetSpot',
  price: 190,
});
console.log('Return value from printProduct (no return):', resultNoReturn); // undefined

// ----------------------------
// 2) Now make a function that returns something
// ----------------------------
function productSummary(productName, productDetails) {
  // return a string summary
  const details = `${productName} — ${productDetails.brand} | ₹${productDetails.price}`;
  return details;
}

const summary = productSummary('Milk Chocolate', {
  brand: 'HomeMade',
  price: 350,
});
console.log('Product summary (with return):', summary);

// ----------------------------
// 3) Return without extra variable (direct return)
// ----------------------------
function productSummaryDirect(productName, productDetails) {
  // direct return — no temporary variable used
  return (
    productName + ' — ' + productDetails.brand + ' | ₹' + productDetails.price
  );
}

console.log(
  'Product summary (direct return):',
  productSummaryDirect('Fruit and Nuts', { brand: 'ChocoHub', price: 80 })
);

// ----------------------------
// 4) Unreachable code after return
// ----------------------------
function demoUnreachable() {
  console.log('This runs');
  return 'Returning early';
  // The line below will never run — it's unreachable
  console.log('This will NOT run (unreachable)');
}

console.log('demoUnreachable() =>', demoUnreachable());

// ----------------------------
// 5) Simple add function (and arrow function version)
// ----------------------------
function addTwoNumbers(a, b) {
  return a + b;
}

const addTwoNumbersArrow = (a, b) => a + b;

// Use examples
console.log('addTwoNumbers(5, 7) =', addTwoNumbers(5, 7)); // 12
console.log('addTwoNumbersArrow(10, 15) =', addTwoNumbersArrow(10, 15)); // 25

// ----------------------------
// 6) Small exercises
// ----------------------------
/*
Exercises:
1. Modify `printProduct` to accept a third argument `inStock` (boolean) and print:
   "In stock" / "Out of stock" accordingly.

2. Change productSummary to return an object:
   {name, brand, price} and show how to destructure the returned object.

3. Write a function `sumAll(...numbers)` that uses rest parameters
   and returns the sum of any number of arguments.

4. Demonstrate unreachable code by placing a console.log before and after a return,
   then explain why the second log never appears.
*/
