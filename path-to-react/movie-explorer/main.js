import { movieList } from './db.js';

const movieDiv1 = document.querySelector('#movie1');
const movieDiv2 = document.querySelector('#movie2');

const p = document.createElement('p');

p.textContent = `${movieList[7].title} (${movieList[7].year}) - Rating: ${movieList[7].imdbRating}`;

movieDiv1.appendChild(p);

// ---------------------------
// Using innerHTML
// (Please read about innerHTML issues in daily notes Day 6)
// ---------------------------
movieDiv2.innerHTML = `
  <p>
    ${movieList[27].title} (${movieList[27].year}) - Rating: ${movieList[27].imdbRating}
  </p>
`;

const movies = [
  {
    title: 'Arrival',
    year: 2016,
    imdbRating: 7.9,
    genre: 'Sci-Fi',
  },
  {
    title: 'Coco',
    year: 2017,
    imdbRating: 8.4,
    genre: 'Animation',
  },
  {
    title: 'Dune',
    year: 2021,
    imdbRating: 8.1,
    genre: 'Sci-Fi',
  },
];

console.log('Custom movies array:', movies);

function printMovie(movie) {
  console.log(`${movie.title} (${movie.year}) - Rating: ${movie.imdbRating}`);
}

// Using movieList (1st, 2nd, 4th movies)
printMovie(movieList[0]);
printMovie(movieList[1]);
printMovie(movieList[3]);

function printRatingMessage(movie) {
  if (movie.imdbRating > 8.5) {
    console.log(`${movie.title} is a Top Rated movie ⭐`);
  } else if (movie.imdbRating > 7) {
    console.log(`${movie.title} is a Good movie 👍`);
  } else {
    console.log(`${movie.title} is an Average movie 😐`);
  }
}

// Using movieList (8th, 9th, 13th movies)
printRatingMessage(movieList[7]);
printRatingMessage(movieList[8]);
printRatingMessage(movieList[12]);

function addMovie(title, year, imdbRating, genre) {
  const newMovie = {
    title,
    year,
    imdbRating,
    genre,
  };

  movieList.push(newMovie);
}

addMovie('Arrival', 2016, 7.9, 'Sci-Fi');
console.log('Movies after adding new movie:', movieList);

function checkGenre(movie, genreToCheck) {
  if (movie.genre === genreToCheck) {
    console.log(`${movie.title} is a ${genreToCheck} movie`);
  } else {
    console.log(`${movie.title} is NOT a ${genreToCheck} movie`);
  }
}

checkGenre(movieList[2], 'Action');
checkGenre(movieList[5], 'Drama');

function searchMovie(title) {
  if (movieList[0].title === title) {
    console.log('Found:', movieList[0].title);
  } else if (movieList[1].title === title) {
    console.log('Found:', movieList[1].title);
  } else if (movieList[2].title === title) {
    console.log('Found:', movieList[2].title);
  } else {
    console.log('Movie not found');
  }
}

// One existing, one not
searchMovie(movieList[1].title);
searchMovie('Random Movie');

const allMovies = [...movies, ...movieList];

console.log('Total movies count:', allMovies.length);

console.log('First movie:', allMovies[0].title);
console.log('Second movie:', allMovies[1].title);
console.log('Third movie:', allMovies[2].title);
console.log('Fourth movie:', allMovies[3].title);
console.log('Fifth movie:', allMovies[4].title);
