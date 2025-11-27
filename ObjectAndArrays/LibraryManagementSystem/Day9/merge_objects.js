// Merging Objects (Spread Operator)
// ---------------------------------
// This example shows how to combine two separate objects into one.
// In React, this is extremely important because state updates must be done
// by creating NEW objects instead of modifying the old ones.

// Base person details
const person = {
  place: 'Toronto',
  pinCode: 123,
  country: 'Canada',
};

// New information to be added
const newData = {
  hobby: ['reading', 'cricket'],
  workLocation: 'New York',
};

// Merge both objects into a NEW object
// Spread pulls out each key/value pair and places them inside newPerson
const newPerson = { ...person, ...newData };

// Print the final merged result
console.log('newPerson: ', newPerson);

/*
Expected Output:

newPerson:  {
  place: 'Toronto',
  pinCode: 123,
  country: 'Canada',
  hobby: ['reading', 'cricket'],
  workLocation: 'New York'
}

Notes:
- The rightmost object (newData) overwrites matching keys if any exist.
- Here, person and newData have completely different keys, so they simply merge.
- This is heavily used in React for updating state without mutating the original object.
*/
