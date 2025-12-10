/* 
Explanation Video (malayalam)
- ⁠Part 1: https://mazahir-haroon-frontend-engineer.neetorecord.com/watch/cc81db8b77508fe79e8b
- ⁠⁠Part 2: https://mazahir-haroon-frontend-engineer.neetorecord.com/watch/7ca534872cb6e95d30b9
*/

const products = ['pen', 'pencil', 'paper'];
//    .......    [ 0.      1.         2.  ];

console.log(products[1]); // pencil

console.log(products[5 - 3]); // equivalent to products[2]

console.log(products[(a = 1)]);

const final = ((a = 3), (b = 4), (c = 7));
console.log(a);
console.log(b);
console.log(c);
console.log(final);

console.log(products[(1, 2, 1)]);
