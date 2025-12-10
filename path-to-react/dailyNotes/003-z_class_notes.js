// Playground - today's notes (3rd December)

const students = ['Shafin', 'Amina', 'Jasli', 'Shaba', 'Fida', 'Safwan'];
//                [ 0.         1.       2.       3.]
// name_of_array[position]
// 0,1 ..

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// console.log(students.length);
// console.log(students[students.length - 1]);

// console.log(students);

// students.push('Fahad Faasil');
// console.log(students);

// students.pop();
// console.log(students);

// console.log();
// students[3] = 'Somebody';
// console.log(students);

// const products = ['kitkat', 'dairymilk', 'snickers'];

// let userRequest = 'KitKat';

// userRequest = userRequest.toLowerCase();

// console.log(products.includes(userRequest));

// -------------------
// const rollNo = 123;
// rollNo = 456;
// 123, 'hello', false true

const studentDetails = {
  userName: 'Fathima Fida',
  followers: 123,
  post: 14,
  postDetails: ['first post', 'second post'],
  securityDetails: {
    secondaryContact: '21321',
    bloodGroup: '',
  },
};

const details = studentDetails.securityDetails.secondaryContact;
console.log(details);

// studentDetails.userName = 'Fida';
// studentDetails.story = 'Amina';
// console.log(studentDetails);

// const users = ['Amina', 'Shafin', 'Fida'];

const userDetails = [
  {
    userName: 'Amina',
    followers: 123,
    post: 14,
  },
  {
    userName: 'Shafin',
    followers: 500,
    post: 14,
  },
  {
    userName: 'Fida',
    followers: 123,
    post: 14,
  },
];
