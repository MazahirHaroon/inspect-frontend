/*
Movie Explorer — Day 2 Features
(Array Methods: forEach, map, filter, find)

NOTE:
-----
From now on, every task will add a real feature to the project.

- You’ll be building the core logic of Movie Explorer first.
- The UI will come later, once you learn how to manipulate the DOM.
- This logic will remain part of the project and will be refined 
  and improved as we move forward.

--------------------------------------------------

Feature 1: List all movies
--------------------------
Goal:
Create the core logic for listing movies.

Instructions:
- Use movieList from db.js
- Create a function listAllMovies()
- Inside the function log movie details in this format:

"Title (Year) - Rating: IMDbRating | Genre"


(This function will later be used to render movies on screen.)

--------------------------------------------------

Feature 2: Search movies by title
--------------------------------
Goal:
Create reusable search logic.

Instructions:
- Create a function searchMovies(query)
- It should return movies whose title includes the query
- Search should be case-insensitive
- Log the matched movies using the same format as Feature 1
- If no movies are found, log "No movies found"

(This will later be connected to a search input.)

--------------------------------------------------

Feature 3: Filter movies by genre
--------------------------------
Goal:
Create genre-based filtering logic.

Instructions:
- Create a function filterByGenre(genre)
- It should return movies matching the genre
- If genre is "ALL", return all movies
- Log the filtered movies

(This will later be connected to a dropdown.)

--------------------------------------------------

Feature 4: Find a movie by title
--------------------------------
Goal:
Find a single movie.

Instructions:
- Create a function findMovieByTitle(title)
- It should find the movie object
- If found, log full movie details
- If not found, log "Movie not found"

(This will later power the movie detail page.)

--------------------------------------------------

Feature 5: Prepare movie data for display
-----------------------------------------
Goal:
Transform raw movie data into display-friendly format.

Instructions:
- Create a function getMovieDisplayList()
- It should return a new array in this format:

"Title (Year) - IMDbRating"

Example:
"Inception (2010) - 8.8"

- Log the final array

(This will later be reused inside React components.)

--------------------------------------------------

End of Features
*/
