const cart = [
  { name: 'Rice', price: 80 },
  { name: 'Olive Oil', price: 220 },
  { name: 'Toothpaste', price: 60 },
  { name: 'Shampoo', price: 150 },
];

// Expected Sum: 510

const result = cart.reduce(add, 10);

function add(sum, item) {
  return sum + item.price;
}

console.log(result);

// With Foreach
// Task: Find the total amount to be paid in the cart

let sum = 0;
cart.forEach((item) => {
  // item = { name: 'Rice', price: 80 },
  sum = sum + item.price;
});
console.log(sum);
