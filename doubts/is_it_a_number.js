// explanation video (malayalam): https://mazahir-haroon-frontend-engineer.neetorecord.com/watch/d32bf73fdf882d79eced

let person = {
  name: 'Shafin',
  subject: 'Maths',
  marks: '95',
};

console.log(typeof person.marks);

const marksInNumber = Number(person.marks);

console.log(typeof marksInNumber);

if (person.marks >= 90) {
  console.log('Top Performer in maths');
} else if (person.marks < 90) {
  console.log('Not the top performer');
} else {
  console.log('Invalid');
}
