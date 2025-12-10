// explanation video (malayalam): https://mazahir-haroon-frontend-engineer.neetorecord.com/watch/b81f6ca9e3bbce1d075a

interface PersonDetailsProp {
  name: string;
  subject: string;
  marks: number;
}

let personDetails: PersonDetailsProp = {
  name: 'Shafin',
  subject: 'Maths',
  marks: 95,
};

if (personDetails.marks >= 90) {
  console.log('Top Performer in maths');
} else if (personDetails.marks < 90) {
  console.log('Not the top performer');
} else {
  console.log('Invalid');
}
