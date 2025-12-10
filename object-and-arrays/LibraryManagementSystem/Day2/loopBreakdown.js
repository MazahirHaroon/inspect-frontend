// Learn Loop

// Fruits Array
// const fruits = ['apple', 'orange', 'plum'];

// Market object with Fruits array of objects
// method == function

const market = {
  name: 'Vazhakkala',
  location: 'Vazhakkala',
  fruits: [
    {
      name: 'apple',
      source: 'Kashmir',
    },
    {
      name: 'orange',
      source: 'Nagpur',
    },
    {
      name: 'Grapes',
      source: 'Mysore',
    },
  ],
};

// console.log(market.fruits[0]);
// console.log(market.fruits[1]);

// Old For Loop 1
for (let i = 0; i < 2; i++) {
  const name = market.fruits[i].name;
  const source = market.fruits[i].source;
  console.log(`${name} from ${source}`);
}

console.log(market.fruits.length);

// Old For Loop 1 + .length
for (let i = 0; i < market.fruits.length; i++) {
  const name = market.fruits[i].name;
  const source = market.fruits[i].source;
  console.log(`${name} from ${source}`);
}

// I am taking some action for each element of an array

// Common function
function printNameAndSource(value) {
  const name = value.name;
  const source = value.source;
  console.log(`${name} from ${source}`);
}

// Old For Loop 1 + .length + function
for (let i = 0; i < market.fruits.length; i++) {
  const eachValue = market.fruits[i];
  printNameAndSource(eachValue);
}

// New ForEach
market.fruits.forEach(printNameAndSource);

/*

--- Key Differences ---

/*
1. Control:
   - for loop → You manually control the start, end, and increment (i = 0; i < length; i++).
   - forEach → It automatically runs once for every element in the array.

2. Simplicity:
   - forEach removes the need to write repetitive index-based code.
   - It reads more like plain English: “For each fruit, do this.”

3. Access:
   - for loop → You get the index (i) directly and use it to access items.
   - forEach → You get the item itself (and optionally the index if needed).

4. Flexibility:
   - for loop → Works on arrays, strings, or custom conditions.
   - forEach → Works only on arrays but is cleaner for array-based tasks.

5. Behavior:
   - for loop → You can use break/continue to control flow.
   - forEach → You cannot break early; it always goes through the entire array.
*/
