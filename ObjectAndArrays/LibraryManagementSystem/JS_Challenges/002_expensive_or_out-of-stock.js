/*
Grocery Items: Find Expensive or Out-of-Stock Items
- Scenario: You manage a grocery store's inventory. Each item has a price and a stock status. 
  You want to identify all items that are either out of stock or too expensive (above ₹100).
- Task: Get a list of items that need restocking or are premium-priced.

*/

// Input
const items = [
  { name: 'Rice', price: 80, inStock: true },
  { name: 'Olive Oil', price: 220, inStock: true },
  { name: 'Toothpaste', price: 60, inStock: false },
  { name: 'Shampoo', price: 150, inStock: true },
];

/* Expected Output
[
  { name: 'Olive Oil', price: 220, inStock: true },
  { name: 'Toothpaste', price: 60, inStock: false },
  { name: 'Shampoo', price: 150, inStock: true }
]
*/

// Solution
const filteredItems = items.filter((item) => {
  return item.price > 100 || item.inStock === false;
});

console.log(filteredItems);
