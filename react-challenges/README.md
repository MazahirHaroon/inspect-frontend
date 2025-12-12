# React Challenges

This folder contains a small scaffold for interactive React code challenges. The purpose is simple: show a grid of challenge tiles (like a chessboard), let users inspect the code, and click **Show solution** to run the specific challenge component.

## Project layout

```
/react-challenges
/index.html <- Vite index (example provided)
/src
/challenges <- Put challenge files here (one default-export React component each)
challenge1.jsx
challenge2.jsx
...
main.jsx <- App entry (renders grid & dynamic loader)
styles.css <- CSS for the grid / tiles
```

## How it works

- Each file inside `src/challenges/` should default-export a React component. Example:

```jsx
// src/challenges/challenge1.jsx
export default function Challenge1() {
  return <div>Output for challenge 1</div>;
}
```

- The main app uses import.meta.glob (Vite) to discover src/challenges/\*.jsx dynamically. Each discovered module is lazy-loaded when the user clicks Show solution.

- The UI shows a grid of square tiles labeled Show solution 1, Show solution 2, etc. When you click a tile, its component is loaded and rendered in the preview area below the grid.
