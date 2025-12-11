# Movie Explorer — Learning Project

**Movie Explorer** is a step-by-step learning project that teaches JavaScript fundamentals by building a mini movie app and then migrating it to React. The project is designed for beginners and maps directly to an 18-day JavaScript curriculum.

## 🧭 Project Vision

Build a simple, real-feeling movie app where users can view movies, add new movies, mark favourites, and search/filter the list. Start with **Vanilla JavaScript** (data modeling, functions, conditionals, arrays/objects), then migrate to **React** to learn components, hooks, state, and routing.

## 🔧 Final Feature List (end-state)

- Browse movies (title, poster, year, rating, genres)
- Search by title (case-insensitive)
- Filter by genre and rating
- Sort by release date and rating
- Movie detail modal or page
- Add a new movie (form)
- Favorite/unfavorite movies (persist to mock backend or `localStorage`)
- Loading and error handling
- Pagination / load more

## 📚 What we build in Vanilla JS

Vanilla JS covers the foundational pieces:

- Data models: arrays of objects for movies
- Functions: `printMovie`, `addMovie`, `checkGenre`, `searchMovie`, `showAllMovies`
- Conditionals and ternary operators for logic and messaging
- Basic array operations: `push`, `pop`, `includes`, spread `[...]` for merges
- Console-driven output and minimal DOM rendering
- Basic form handling and simple persistence

The Vanilla JS phase will make sure every student understands how data and logic work before moving into components.

## 🚀 When we switch to React

After completing the JS fundamentals (variables, operators, functions, arrays/objects, async basics), we switch to React to:

- Componentize the UI
- Use `useState` and `useEffect` for state/lifecycle
- Implement `map` / `filter` / `sort` in component render logic
- Use `fetch()` for real or mocked API calls
- Add routing (`react-router`) for detail pages
- Deploy the final app

## 🗂️ Suggested Workflow

1. Complete Vanilla-JS tasks (Days 1–18) and small commits for each day.
2. Bridge to async (`fetch`) and see how the same data can be loaded.
3. Scaffold a Vite + React project and port logic into components.
4. Iterate, polish UI with Tailwind (optional), and deploy.

## ✨ Learning Outcomes

By the end of the project, students will:

- Confidently use JS to model and manipulate data
- Understand the value of functions and pure logic
- Translate imperative code into declarative React components
- Have a deployable project to showcase

---
