// Learn Loop

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

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

for (let i = 0; i < 2; i++) {
  const name = market.fruits[i].name;
  const source = market.fruits[i].source;
  console.log(`${name} from ${source}`);
}
