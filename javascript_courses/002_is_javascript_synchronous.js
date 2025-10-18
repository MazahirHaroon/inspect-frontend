/*
------------------------------
Links: 

- YouTube Video Link: https://www.youtube.com/watch?v=k8v0qK0u_lM

- Anynote link: https://any.coop/AB2DLqz9p8Fk7KCdSnkivxZPhPYw9K3ecArpX5jqcEj7Yuga/day-1-inspect-frontend-javascript-crash-course

- Event Loop Visualizer: https://www.jsv9000.app/

------------------------------
*/

console.log('A');
console.log('B');
console.log('C');

console.log('D');
setTimeout(() => console.log('E'), 4000);
console.log('F');

// Expected console order in browser/Node:
// A B C D F ... then (after ~4s) E

/* Exercise:
 - Change timeout to 0 and observe where 'E' appears.
*/
