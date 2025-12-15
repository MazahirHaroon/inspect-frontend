/*
Tasks

IMPORTANT NOTE:
---------------
• In Task 1, you will create your own array named `movies`.
• From Task 2 onward, you will use the imported `movieList` array 
  (except when a task specifically mentions using your own `movies` array).

--------------------------------------------------

Task 1: Store movie details using arrays & objects.
--------------------------------------------------
Instructions:
Create an array named movies with 3 movie objects. Each object should have:

- title
- year
- imdbRating
- genre

(This task is only to practice creating your own array.)

--------------------------------------------------

Task 2: Create a function to print one movie.
---------------------------------------------
Instructions:
Write a function named printMovie(movie) that logs:

"<title> (<year>) - Rating: <imdbRating>"

Use movieList for the movies.
Call printMovie() for the 1st, 2nd, and 4th movies from movieList.

--------------------------------------------------

Task 3: Conditional rating message.
-----------------------------------
Instructions:
Create a function named printRatingMessage(movie).
Use if/else if/else:

- If imdbRating > 8.5 → "<title> is a Top Rated movie ⭐"
- Else if imdbRating > 7 → "<title> is a Good movie 👍"
- Else → "<title> is an Average movie 😐"

Use movieList for this task.
Call the function for the 8th, 9th, and 13th movies.

--------------------------------------------------

Task 4: Add a new movie using a function.
-----------------------------------------
Instructions:
Create a function named addMovie(title, year, imdbRating, genre).
Inside the function:

- Create a new movie object.
- Push it into the movies array (the array you created in Task 1).

Then call addMovie() once and print the entire movies array.

--------------------------------------------------

Task 5: Check if a movie belongs to a certain genre.
----------------------------------------------------
Instructions:
Write a function checkGenre(movie, genreToCheck).

If movie.genre === genreToCheck:
   Log: "<title> is a <genreToCheck> movie"
Else:
   Log: "<title> is NOT a <genreToCheck> movie"

Use movieList for this task.
Call this function for any 2 movies from movieList.

--------------------------------------------------

Task 6: Simple search (no loops).
---------------------------------
Instructions:
Create a function searchMovie(title).

Check if title matches movieList[0], movieList[1], or movieList[2].
If matched:
   Log: "Found: <movie title>"
Else:
   Log: "Movie not found"

Call searchMovie() twice — one for a movie that exists, one that doesn’t.

--------------------------------------------------

Task 7: Merge your movie array with movieList using the spread operator.
-----------------------------------------------------------------------
Instructions:
In Task 1, you created your own array named movies (with 3 movie objects).

Now merge that array with the movieList array imported from db.js 
using the spread operator:

const allMovies = [...movies, ...movieList];

Then:
- Print the total number of movies in allMovies.
- Print the first 5 movie titles from allMovies (no loops, use indexing).

--------------------------------------------------

End of Tasks
*/
