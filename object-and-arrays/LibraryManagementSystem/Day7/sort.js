const a = [2, 3, 1];
a.sort();
console.log(a);

const list = [10, 2, 30];
list.sort();
console.log(list);

/*
It should return a number where:
    A negative value indicates that a should come before b.
    A positive value indicates that a should come after b.
    Zero or NaN indicates that a and b are considered equal.
*/

const asc = list.sort((a, b) => a - b);
console.log(asc);

const desc = list.sort((a, b) => b - a);
console.log(desc);

const names = ['bob', 'Álvaro', 'alice', 'Çetin'];
names.sort();
console.log(names);

const sorted = names.sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log(sorted);
