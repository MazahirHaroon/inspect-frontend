# Common JavaScript Improvements (Learning from Practice Tasks)

This document highlights **common improvements and best practices** observed while solving the movie-related tasks. These points are shared **without referring to any individual**, so everyone can learn from the same set of mistakes and patterns.

---

## 1. Designing Better Functions

**Associated Tasks:** Task 2, Task 3, Task 5, Task 6

A common pattern during practice is passing **indexes** into functions instead of the actual data.

This often happens because instructions say things like:

> “Call the function for the 1st, 2nd, and 4th movies.”

That interpretation is completely reasonable. However, unless an instruction clearly states that a function should work only with a specific dataset, a function should be written to accept **data**, not positions.

### Key Principle

> Functions should operate on the data passed to them, not fetch data internally.

### Better Example

```js
function printMovie(movie) {
  console.log(`${movie.title} (${movie.year}) - Rating: ${movie.imdbRating}`);
}

printMovie(movieList[0]);
printMovie(movieList[1]);
```

This function now:

- Works with any movie object
- Does not depend on where the movie comes from
- Has a single responsibility

---

## 2. Avoid Repeating the Same Expression

**Associated Tasks:** Task 3, Task 6

If you find yourself writing the same expression multiple times, it hurts readability and makes code harder to maintain.

### Better Habit

Extract the repeated values once and reuse them.

### Better Example

```js
function printRatingMessage(movie) {
  const { title, imdbRating } = movie;

  if (imdbRating > 8.5) {
    console.log(`${title} is a Top Rated movie ⭐`);
  } else if (imdbRating > 7) {
    console.log(`${title} is a Good movie 👍`);
  } else {
    console.log(`${title} is an Average movie 😐`);
  }
}
```

### Key Principle

> If you repeat the same expression multiple times, store it in a variable.

---

## 3. Use Clear and Descriptive Variable Names

**Associated Tasks:** Task 4

Avoid vague names that don’t explain what the data represents.

### Better Example

```js
function addMovie(title, year, imdbRating, genre) {
  const movie = {
    title,
    year,
    imdbRating,
    genre,
  };

  movies.push(movie);
}
```

Clear naming reduces confusion and removes the need for extra comments.

### Extra Tip

When the **property name and variable name are the same**, there is no need to repeat it.

Instead of:

```js
genre: genre;
```

You can simply write:

```js
genre;
```

This is called **object property shorthand** and is the preferred, cleaner way to write objects in JavaScript.

---

## 4. Prefer `===` Over `==`

**Associated Tasks:** Task 6

Always prefer strict equality to avoid unexpected type coercion.

### Better Example

```js
if (movie.title === titleToSearch) {
  console.log(`Found: ${movie.title}`);
}
```

This makes comparisons predictable and safer.

---

## 5. Reduce Repetition in Conditional Logic

**Associated Tasks:** Task 3, Task 6

When conditional branches repeat the same structure, the code becomes harder to read.

### Better Example (No loops)

```js
function searchMovie(title, movies) {
  const first = movies[0];
  const second = movies[1];
  const third = movies[2];

  if (
    first.title === title ||
    second.title === title ||
    third.title === title
  ) {
    console.log(`Found: ${title}`);
  } else {
    console.log('Movie not found');
  }
}
```

---

## Final Takeaways

- Pass objects to functions, not indexes
- Reduce repetition
- Write reusable, single-purpose functions
- Use clear and descriptive naming
- Prefer `===` over `==`

These fundamentals may feel small now, but they make a **huge difference** as codebases grow and when moving into frameworks like React.
