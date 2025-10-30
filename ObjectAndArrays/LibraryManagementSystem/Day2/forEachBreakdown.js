// Learn forEach

// Fruits Array
// const fruits = ['apple', 'orange', 'plum'],

// Market object with Fruits array of objects
const market = {
  fruits: [
    {
      name: 'apple',
      source: 'Kashmir',
    },
    {
      name: 'orange',
      source: 'Nagpur',
    },
  ],
};

// --- Before: Traditional for loop ---
// for (let i = 0; i < 2; i++) {
//   const name = market.fruits[i].name;
//   const source = market.fruits[i].source;
//   console.log(`${name} from ${source}`);
// }

// --- Now: Using forEach ---
// forEach automatically loops through every item in the array
// It gives you access to the current element and its index

market.fruits.forEach(function (fruit) {
  const name = fruit.name;
  const source = fruit.source;
  console.log(`${name} from ${source}`);
});

// Key Differences:
// 1. You don’t need to manage “i < length” manually.
// 2. The function runs automatically for each element in the array.
