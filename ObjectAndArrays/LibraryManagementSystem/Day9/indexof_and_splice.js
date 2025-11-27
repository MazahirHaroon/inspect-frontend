// Removing a job preference from a candidate's selected list
// ----------------------------------------------------------
// Real-life situation:
// A candidate selects job types they are open to: full-time, part-time, freelance, internship.
// Later they decide they no longer want "freelance" opportunities — remove it immutably.

// Original list of job preferences
const jobPreference = ['full-time', 'part-time', 'freelance', 'internship'];

// Create a COPY so we don't mutate the original array (important for React)
const updatedPreference = [...jobPreference];

// The preference the user wants to remove
const toRemove = 'freelance';

// Find the position of the item
// indexOf returns the index if found, or -1 if not found
const index = jobPreference.indexOf(toRemove);
console.log('Index of preference:', index); // e.g., 2

// Remove only if it exists
if (index !== -1) {
  updatedPreference.splice(index, 1); // removes 1 item at position `index`
}

// Print both arrays to demonstrate immutability
console.log('Original preferences:', jobPreference);
console.log('Updated preferences:', updatedPreference);

/*
Expected output:
Index of preference: 2
Original preferences: [ 'full-time', 'part-time', 'freelance', 'internship' ]
Updated preferences:  [ 'full-time', 'part-time', 'internship' ]

Why we copy first:
- splice() mutates the array. By copying with spread we keep the original intact.
- In React, you should never mutate state directly. Use copies and return the new array.

React example (using useState):
setPreferences(prev => {
  const copy = [...prev];
  const idx = copy.indexOf('freelance');
  if (idx !== -1) copy.splice(idx, 1);
  return copy;
});
*/
