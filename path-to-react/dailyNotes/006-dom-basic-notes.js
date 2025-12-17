/*
===========================================
DOM BASICS — Notes & Examples
(Movie Explorer Project)
===========================================

DOM = Document Object Model

The DOM represents the HTML page as a tree of objects.
JavaScript can READ, CREATE, UPDATE, and REMOVE elements
from this tree.

Today, we learn ONLY what is needed to:
- read elements
- change content
- create elements
- add them to the page

No styling, no advanced events yet.
This is enough to build real features.
===========================================
*/

/*
-------------------------------------------
1. Selecting an element
-------------------------------------------

We select elements using document.getElementById()

(to test create an HTML file with below given HTML code
 and connect this script file to it.)
HTML code: 
<div id="app"></div>
*/

const app = document.getElementById('app');
console.log(app);

/*
-------------------------------------------
2. Selecting an element (modern)
-------------------------------------------

querySelector works like CSS selectors.
It always returns the FIRST matching element.
*/

const appByQuery = document.querySelector('#app');
console.log(appByQuery);

// Both select the same element
console.log(appById === appByQuery); // true

/*
-------------------------------------------
3. Changing text content
-------------------------------------------
*/

app.textContent = 'Movie Explorer';

/*
textContent:
- sets plain text
- safest way to update text
*/

/*
-------------------------------------------
4. Inserting HTML
-------------------------------------------
*/

app.innerHTML = '<h2>Welcome to Movie Explorer</h2>';

/*
innerHTML:
- allows HTML tags
- replaces existing content
*/

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

/*
-------------------------------------------
5. Creating an element
-------------------------------------------
*/

const heading = document.createElement('h3');
heading.textContent = 'Top Movies';

/*
-------------------------------------------
6. Adding element to the page
-------------------------------------------
*/

app.appendChild(heading);

/*
appendChild:
- adds element as the last child
*/

/*
-------------------------------------------
7. Creating a simple card (example)
-------------------------------------------
*/

const card = document.createElement('div');

card.innerHTML = `
  <h4>Inception</h4>
  <p>Year: 2010</p>
  <p>Rating: 8.8</p>
`;

app.appendChild(card);

/*
-------------------------------------------
IMPORTANT SUMMARY
-------------------------------------------

document.getElementById()  → select
element.textContent       → change text
element.innerHTML         → insert HTML
document.createElement()  → create element
parent.appendChild()      → add to page

-------------------------------------------
*/
