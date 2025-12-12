# Inspect Frontend – Web Development Foundations

Welcome to the **Inspect Frontend Learning Repository!**
This repository contains the **daily code, class examples, and mini projects** from our live sessions and learner discussions.

We focus on helping students **build strong foundations in JavaScript, HTML, and CSS**, the essential building blocks of modern frontend development.
Every folder here connects directly to what we’ve discussed and built together during our calls.

> 🟢 We’re just getting started!
> For now, you’ll find only a few files as we’re actively adding new lessons each week.
> Check back often for updates or star the repo to stay notified.

---

## Repository Structure

The repository is organised into dedicated folders for different learning paths and teaching formats:

---

## `/pathToReact`

This folder contains the material specifically created to help learners move from **JavaScript foundations → React development** efficiently.
It is divided into three sub-folders:

```
/pathToReact
  ├─ courseDetails/     # Overview page + timetable + CSS (open index.html in browser)
  ├─ dailyNotes/        # Numbered day-by-day notes (editable JS files used in class)
  └─ playground/        # Small live sandbox for running snippets during calls
```

---

## `/react-challenges`

This folder contains an **interactive React Challenges Viewer**, a tool to practice React concepts through short, focused exercises.

<img width="1239" height="657" alt="image" src="https://github.com/user-attachments/assets/40e1efc2-edd5-40e6-9dcf-e9f74d311329" />


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

### Running

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

### YouTube Learning Series

We also maintain a separate **YouTube video series**, where similar (but sometimes broader) topics are explained in a structured, asynchronous way.

[<img width="777" height="550" alt="image" src="https://github.com/user-attachments/assets/cafcd840-31e6-47f7-a23a-e0a72a7e5a13" />](https://www.youtube.com/playlist?list=PLPFRrbkGSYzqoFJT-B3_RSMWxA5r0XBDk)


**Watch the playlist here:**
**[https://www.youtube.com/playlist?list=PLPFRrbkGSYzqoFJT-B3_RSMWxA5r0XBDk](https://www.youtube.com/playlist?list=PLPFRrbkGSYzqoFJT-B3_RSMWxA5r0XBDk)**

---

### `/javascript_courses`

This folder focuses on **core JavaScript concepts**, taught progressively day by day.
Each subfolder or file corresponds to a daily session covering key topics such as:

- DOM manipulation
- Events and forms
- Arrays, objects, and loops
- Functions and modules
- Building small interactive examples

It’s designed to help learners gain strong fundamentals before moving on to larger frameworks or projects.

---

### `/reporters-desk`

This folder represents our **project-based learning series**, where we apply all the JavaScript concepts to build a complete, real-world web application — _Reporter’s Desk_.
It’s a newsroom workflow app that helps learners connect core programming skills with practical product thinking.
Each subfolder (Day 1, Day 2, etc.) represents a step in building the application from scratch, first with vanilla JavaScript and later transitioning to React.

---

### `/ObjectAndArrays`

This folder introduces a **new foundational mini-series** focused on understanding **Objects and Arrays** in JavaScript through relatable, real-world examples.

The current subfolder, `LibraryManagementSystem`, walks learners through how data can be structured, accessed, and manipulated in JavaScript applications using objects and arrays.

Each day builds on the previous one with progressive improvements:

- **Day 1**: Introduction to Objects and Arrays through a simple “Library Borrow System.”
- **Day 2**: Adds a “Return Book” feature using `.splice()` and DOM updates.
- More upcoming features will further strengthen data-handling skills.

**Learning Goal:**
Help learners intuitively understand how **objects store related data** and how **arrays handle collections**, all through a practical, story-driven example.

---

## How to Use This Repo

1. Clone the repo:

   ```bash
   git clone https://github.com/<your-username>/inspect-frontend.git
   ```

---

## 👨‍💻 Maintainer

Inspect Frontend Community
Mentored by **Mazahir Haroon**
📍 Kerala, India

```javascript
console.log('Namaskaram from Inspect Frontend 👋');
```
