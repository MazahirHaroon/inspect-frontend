# Inspect Frontend – Web Development Foundations

Welcome to the **Inspect Frontend Learning Repository!**
This repository contains the **daily code, class examples, and mini projects** from our live sessions and learner discussions.

We focus on helping students **build strong foundations in JavaScript, HTML, and CSS**, the essential building blocks of modern frontend development. Every folder here connects directly to what we’ve discussed and built together during our calls.

> 🟢 We’re just getting started!
> For now, you’ll find only a few files as we’re actively adding new lessons each week.
> Check back often for updates or star the repo to stay notified.

---

## Repository Structure

The repository is organized into dedicated folders for different learning paths and teaching formats:

---

## [/pathToReact](https://github.com/MazahirHaroon/inspect-frontend/tree/main/path-to-react)

This folder contains the material specifically created to help learners move from **JavaScript foundations → React development** efficiently.
It is divided into three sub-folders:

```
/pathToReact
  ├─ courseDetails/     # Overview page + timetable + CSS (open index.html in browser)
  ├─ dailyNotes/        # Numbered day-by-day notes (editable JS files used in class)
  └─ playground/        # Small live sandbox for running snippets during calls
```

---

## [/react-challenges](https://github.com/MazahirHaroon/inspect-frontend/tree/main/react-challenges)

This folder contains an **interactive React Challenges Viewer**, a tool to practice React concepts through short, focused exercises.

<img width="1239" height="657" alt="Interactive React Challenges Viewer UI" src="https://github.com/user-attachments/assets/40e1efc2-edd5-40e6-9dcf-e9f74d311329" />

### Each challenge includes:

- a **title**
- a **question**
- the **source code**
- a **live preview**
- the **solution / explanation**

### How it works

- Add `.jsx` files into `src/challenges/`.
- Each file exports:

  - a **default React component** (rendered in the preview)
  - an optional `meta` object with `title`, `question`, and `solution`.

Example:

```jsx
export const meta = {
  title: 'useCallback + memo example',
  question: 'How many times does the child render?',
  solution: 'Child renders once because the callback reference is stable.',
};

export default function Challenge() {
  return <div>Hello!</div>;
}
```

### Running the Project

```sh
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

Challenges automatically appear in the sidebar.
The viewer also includes a **4-theme switcher** to customise the UI.

---

### [YouTube Learning Series](https://www.youtube.com/playlist?list=PLPFRrbkGSYzqoFJT-B3_RSMWxA5r0XBDk)

We also maintain a separate **YouTube video series**, where similar (but sometimes broader) topics are explained in a structured, asynchronous way.

[<img width="777" height="550" alt="Mazahir Haroon's Youtube Channel" src="https://github.com/user-attachments/assets/cafcd840-31e6-47f7-a23a-e0a72a7e5a13" />](https://www.youtube.com/playlist?list=PLPFRrbkGSYzqoFJT-B3_RSMWxA5r0XBDk)

**Watch the playlist here:**
**[https://www.youtube.com/playlist?list=PLPFRrbkGSYzqoFJT-B3_RSMWxA5r0XBDk](https://www.youtube.com/playlist?list=PLPFRrbkGSYzqoFJT-B3_RSMWxA5r0XBDk)**

---

## [/react-performance-tips](https://github.com/MazahirHaroon/inspect-frontend/tree/main/react-performance-tips)

This folder contains **learning-focused React performance examples and experiments**, mainly around **re-renders, composition patterns, and component structure**.

<img width="1009" height="610" alt="React Performance Tips UI" src="https://github.com/user-attachments/assets/7b1be1e0-df96-45a7-8b0d-c792419affdf" />

The lessons here are **not production utilities**, but small, intentional code samples created to understand _why_ React re-renders and _how_ better composition can help. Code may intentionally prioritize clarity over DRY principles.

### Inspiration

The material in this folder is **inspired by the work of Nadia Makarevich**
and the **Developer Way** YouTube channel and blog.

Developer Way provides deep, practical insights into React internals,
especially around re-render behavior and composition-based optimizations.

**References include (but are not limited to):**

- [https://www.youtube.com/@DeveloperWay](https://www.youtube.com/@DeveloperWay)
- [https://www.developerway.com/posts/react-re-renders-guide](https://www.developerway.com/posts/react-re-renders-guide)

### Lesson patterns included

- **example**  
  A baseline example to observe default re-render behavior.

- **move-state-down**  
  Demonstrates how moving state closer to where it’s used reduces re-renders.

- **component-as-children-prop**  
  Shows how passing components as `children` can prevent parent re-renders
  from affecting expensive child components.

- **component-as-prop**  
  Demonstrates passing components as props and how it affects element identity
  and re-render behavior.

### How to use these lessons

Each lesson **shows a less optimal implementation by default**, which usually causes **extra or unnecessary re-renders**.

Open the app and select a lesson from the top.

**To learn:**

- Observe the current (slow) behavior
- Open the lesson file
- Comment the current code
- Uncomment the improved version
- Reload and compare the render behavior

The goal is to **see the problem first, then fix it by changing structure**, not by memorizing patterns.

### Running the Project

```sh
npm run dev
```

---

## [/async-js](https://github.com/MazahirHaroon/inspect-frontend/tree/main/async-js)

This folder focuses on **asynchronous JavaScript fundamentals**, explained through **progressive, numbered lesson files**.

Each `.js` file contains:

- explanatory **notes written as comments**
- runnable **example code**
- step-by-step reasoning about execution order

The lessons cover topics such as:

- `setTimeout` and the event loop
- callbacks and callback hell
- promises
- `async` / `await`
- why each abstraction exists

### How to use

You can run and understand these lessons in two ways:

- **In the browser**  
  Connect any lesson file to an HTML file using a `<script>` tag and observe the output in the console.

- **Using Node.js**  
  Run individual files directly with Node to follow execution through logs and comments.

The primary goal is to **read the comments alongside the code** and mentally trace how asynchronous execution works in JavaScript.

---

### [/javascript_courses](https://github.com/MazahirHaroon/inspect-frontend/tree/main/javascript-courses)

This folder focuses on **core JavaScript concepts**, taught progressively day by day.
Each subfolder or file corresponds to a daily session covering key topics such as:

- DOM manipulation
- Events and forms
- Arrays, objects, and loops
- Functions and modules
- Building small interactive examples

It’s designed to help learners gain strong fundamentals before moving on to larger frameworks or projects.

---

### [/reporters-desk](https://github.com/MazahirHaroon/inspect-frontend/tree/main/reporter-desk)

This folder represents our **project-based learning series**, where we apply all the JavaScript concepts to build a complete, real-world web application — _Reporter’s Desk_.
It’s a newsroom workflow app that helps learners connect core programming skills with practical product thinking.
Each subfolder (Day 1, Day 2, etc.) represents a step in building the application from scratch, first with vanilla JavaScript and later transitioning to React.

---

### [/object-and-arrays](https://github.com/MazahirHaroon/inspect-frontend/tree/main/object-and-arrays/LibraryManagementSystem)

This folder introduces a **new foundational mini-series** focused on understanding **Objects and Arrays** in JavaScript through relatable, real-world examples.

The current subfolder, `LibraryManagementSystem`, walks learners through how data can be structured, accessed, and manipulated in JavaScript applications using objects and arrays.

Each day builds on the previous one with progressive improvements:

- **Day 1**: Introduction to Objects and Arrays through a simple “Library Borrow System.”
- **Day 2**: Adds a “Return Book” feature using `.splice()` and DOM updates.
- More upcoming features will further strengthen data-handling skills.

**Learning Goal:**
Help learners intuitively understand how **objects store related data** and how **arrays handle collections**, all through a practical, story-driven example.

---

## 👨‍💻 Maintainer

Inspect Frontend Community
Mentored by **Mazahir Haroon**
📍 Kerala, India

```javascript
console.log("Namaskaram from Inspect Frontend 👋");
```
