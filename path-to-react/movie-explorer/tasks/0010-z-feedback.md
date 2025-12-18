# Common JavaScript Improvements (Learning from Practice Tasks)

This document highlights **common improvements and best practices** observed while solving the movie-related tasks. These points are shared **without referring to any individual**, so everyone can learn from the same set of mistakes and patterns.

---

## 1. Designing Better Functions

**Associated Tasks:** Task 2, Task 3, Task 5, Task 6
**Tag:** Design

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
**Tag:** Readability

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

## 3. Avoid Extra Conditions That Don’t Add Value

**Associated Tasks:** Task 3
**Tag:** Logic · Readability

Example of an unnecessary condition:

```js
else if (movie.imdbRating > 7 && movie.imdbRating < 8.5)
```

In an `if / else if / else` chain, **only one block runs**:

- If the first `if` condition passes, **none of the `else if` or `else` blocks will run**
- If the first `if` fails, execution moves to the next condition

So when you already have:

```js
if (movie.imdbRating > 8.5) { ... }
```

and execution reaches the `else if`, the check `movie.imdbRating < 8.5` is **already guaranteed** to be true. Adding it again does not change the behavior in any way.

### Why This Matters

- In small files, this may look harmless
- In larger codebases, extra conditions:

  - Slow down understanding
  - Create confusion during debugging
  - Increase the chance of mistakes when logic changes later

### Learning point

> Write conditions that say exactly what you mean — no more and no less.

---

## 4. Use Clear and Descriptive Variable Names

**Associated Tasks:** Task 4
**Tag:** Readability

Avoid vague names that don’t explain what the data represents like obj, array , a, abc, xyz etc;

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

### Extra Tip: Object Shorthand

When the **property name and variable name are the same**, there is no need to repeat it.

Instead of:

```js
genre: genre;
```

You can write:

```js
genre;
```

This is called **object property shorthand** and is the preferred, cleaner way to write objects in JavaScript.

---

## 5. Parameter Names Should Reflect What Is Passed

**Associated Tasks:** Task 5
**Tag:** Readability · Design

```js
function checkGenre(movies, genreToCheck) {
```

This function receives a **single movie**, not multiple movies. Naming the parameter `movies` is misleading.

### Why This Matters

- In a larger codebase, misleading names:

  - Cause incorrect assumptions
  - Lead to wrong usage of functions
  - Make debugging harder during development

**Learning point:**

> Parameter names should describe what the value represents, not where it came from.

---

## 6. Prefer `===` Over `==`

**Associated Tasks:** Task 6
**Tag:** Logic

Always prefer strict equality to avoid unexpected type coercion.

### Better Example

```js
if (movie.title === titleToSearch) {
  console.log(`Found: ${movie.title}`);
}
```

This makes comparisons predictable and safer.

---

## 7. Reduce Repetition in Conditional Logic

**Associated Tasks:** Task 3, Task 6
**Tag:** Logic · Readability

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

## 8. Naming Convention: Always Use camelCase

**Associated Tasks:** All
**Tag:** Readability · Consistency

JavaScript follows **camelCase** naming by convention.

Correct:

```js
⁠⁠rollNumber
marks
⁠⁠studentDetails
⁠⁠statusUpdate
```

Avoid:

```js

⁠⁠rollnumber
⁠Marks
⁠⁠StudentDetails
⁠⁠Statusupdate
```

Inconsistent casing:

- Breaks conditions silently
- Makes bugs harder to spot
- Creates confusion in team environments

---

## Debug Checklist (When Your Code Doesn’t Work)

Before assuming your logic is wrong, check the following **in order**:

1. **Property names**

   - Correct spelling?
   - Consistent casing?

2. **Data types**

   - String ↔ string
   - Number ↔ number
   - Object ↔ object

3. **Function inputs**

   - Is the function receiving what it expects (object vs index)?

4. **Conditions**

   - Are any checks redundant?
   - Can the condition ever become `true`?

5. **Variable and parameter names**

   - Do the names match what the value represents?

Most bugs in beginner code come from **small mismatches**, not complex logic.

---

## Final Takeaways

- Pass objects to functions, not indexes
- Reduce repetition
- Write reusable, single-purpose functions
- Use clear and descriptive naming
- Follow camelCase consistently
- Prefer `===` over `==`

These fundamentals may feel small now, but they make a **huge difference** as codebases grow and when moving into frameworks like React.
