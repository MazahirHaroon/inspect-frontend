import { movieList } from '../movie-explorer/db.js';

/*
  Steps:
  1. Select an element
  2. Create an element
  3. Append it

  <div id="movie1">
    <p></p>
  </div>
*/

// ---------------------------
// Selection
// ---------------------------
const movieDiv1 = document.querySelector('#movie1');
const movieDiv2 = document.querySelector('#movie2');

// ---------------------------
// Creation (createElement)
// ---------------------------
const p = document.createElement('p');

p.textContent = `${movieList[7].title} (${movieList[7].year}) - Rating: ${movieList[7].imdbRating}`;

// ---------------------------
// Appending
// ---------------------------
movieDiv1.appendChild(p);

// ---------------------------
// Using innerHTML (creation + appending)
// ---------------------------
movieDiv2.innerHTML = `
  <p>
    ${movieList[27].title} (${movieList[27].year}) - Rating: ${movieList[27].imdbRating}
  </p>
`;

/*
  ❌ When NOT to use innerHTML

  1. When content comes from user input
     - innerHTML can execute injected HTML or scripts (XSS risk)
     - Example: user types "<img src='x' onerror={console.log('error')}"

  2. When appending frequently in a loop 
  (We will talk about this in Wednesday's call)
     - innerHTML += causes re-parsing of the entire HTML each time
     - This is inefficient and can hurt performance

  3. When you need fine-grained control over elements
  (We will talk about this in Wednesday's call)
     - You can’t easily attach event listeners safely
     - Reassigning innerHTML removes existing DOM nodes and listeners

  4. When updating only a small part of the UI repeatedly
     - createElement + appendChild is more predictable and safer

  ✅ innerHTML is acceptable when:
     - Content is static or fully trusted
     - You are replacing the entire block at once
     - Performance and security are not concerns
*/
