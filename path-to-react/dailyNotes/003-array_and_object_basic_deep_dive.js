// ---------------------------------------------------------------
// 1. Arrays — Introduction
// ---------------------------------------------------------------
// Arrays store multiple values in a single variable.
//
// Real-life idea:
// A shelf with multiple books in order.

let students = ['Shafin', 'Amina', 'Arjun'];

console.log(students[0]); // Shafin (index starts at 0)
console.log(students[2]); // Arjun

// Array length:
console.log(students.length); // 3

// Adding to array:
students.push('Shaba'); // adds at the end
console.log(students);

// Removing last item:
students.pop();

// ---------------------------------------------------------------
// 2. Arrays — Practical Examples
// ---------------------------------------------------------------

// Example: Marks of a student
let marks = [87, 92, 76];
console.log(marks[1]); // 92

// Example: Days the class happens
let classDays = ['Monday', 'Tuesday', 'Wednesday'];
let today = 'Tuesday';

if (classDays.includes(today)) {
  console.log('We have Inspect Frontend class today!');
} else {
  console.log('No class today!');
}

// ---------------------------------------------------------------
// 3. Objects — Introduction
// ---------------------------------------------------------------
// Objects store information in key: value pairs.
//
// Real-life idea:
// A student ID card with fields: name, age, grade.

let student = {
  name: 'Amina',
  rollNo: 7,
  score: 87,
};

console.log(student.name); // Amina
console.log(student.rollNo); // 7

// Changing values:
student.score = 95;

// Adding new value:
student.city = 'Kochi';

// ---------------------------------------------------------------
// 4. Objects — Practical Examples
// ---------------------------------------------------------------

// Example: Amina’s details
let studentDetails = {
  name: 'Amina',
  laptop: true,
  notes: true,
  internet: false,
};

if (studentDetails.laptop && studentDetails.notes && studentDetails.internet) {
  console.log('Amina is ready for the class');
} else {
  console.log('Amina needs to prepare');
}

// Example: Game player stats
let player = {
  name: 'Arjun',
  coins: 120,
  level: 3,
};

if (player.coins > 100) {
  console.log('Level Up for Arjun!');
}

// ---------------------------------------------------------------
// 5. Nested Objects & Arrays
// ---------------------------------------------------------------

// Array inside object:
let teacher = {
  name: 'Mazahir',
  subjects: ['HTML', 'CSS', 'JavaScript'],
};

console.log(teacher.subjects[1]); // CSS

// Object inside array:
let classStudents = [
  { name: 'Jasli', score: 88 },
  { name: 'Shaba', score: 95 },
  { name: 'Jatin', score: 72 },
];

console.log(classStudents[1].name); // Jasli

// ---------------------------------------------------------------
// 6. Exercise Section
// ---------------------------------------------------------------
// 1. Create an array of 5 fruits and print the 3rd one.
// 2. Create an object for a car with brand, model, year.
// 3. Add a new key "color" to the car object.
// 4. Create an array of 3 student objects with name & attendance.
// 5. Check if any student has attendance > 90 → print their name.
// 6. Use modulo to check if a number is divisible by 5.
// 7. Use ternary to print "Eligible" if age > 18 else "Not Eligible".
// 8. Use ! to check if wifi is OFF → print "Connect to wifi".
// 9. Create an object for “course” with topics: HTML, CSS, JS.
// 10. Inside JS topic, store an array of chapters (Basics, Arrays, Functions).

// End of Day 3
