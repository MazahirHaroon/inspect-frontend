// Doubt 1

function isItExpensive(price) {
  if (price > 30) {
    return true;
  } else {
    return false;
  }
}

const result = isItExpensive(10);
console.log(result);

if (result) {
  console.log('This item is really expensive');
}

// Code you shared

function isItExpensive(price) {
  if (price > 30) {
    return true;
  } else {
    return false;
  }
}

if (isItExpensive(45)) {
  console.log('This item is really expensive');
}

// Doubt 2

const tunaCans = prompt('How many tuna cans do you have?');

const tunaCansNumber = Number(tunaCans);

const hasAnOpener = prompt('Do you have a can opener with you? (yes/no)');

function hasEnoughFood(cans) {
  return cans >= 20;
}

if (hasEnoughFood(tunaCansNumber) && hasAnOpener === 'yes') {
  console.log('You can join the fight');
}

// Doubt 3

myArray.forEach(addThemToPage);

function addThemToPage(abc) {
  console.log(abc); // Dragon

  const paragraph = document.createElement('p');

  paragraph.textContent = abc;
  // <p> Dragon </p>

  document.body.appendChild(paragraph);
}

// Same as above
myArray.forEach((abc) => {
  console.log(abc); // Dragon

  const paragraph = document.createElement('p');

  paragraph.textContent = abc;
  // <p> Dragon </p>

  document.body.appendChild(paragraph);
});
