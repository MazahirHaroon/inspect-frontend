# React Performance – Learning & Experiments

This folder contains **lesson code, experiments, and examples** focused on **understanding and improving React performance**, especially around **re-renders and component composition**.

The code here is written for **learning and exploration**, not as production-ready abstractions.

---

## Inspiration

The ideas explored in this folder are **largely inspired by the work of Nadia Makarevich (Developer Way)** and the **Developer Way** YouTube channel and blog.

Developer Way consistently publishes **deep, practical explanations** of how React actually works under the hood.

This folder exists as a way to **rebuild, experiment, and internalize** those ideas through hands-on code.

---

## Key Reference Material

Some of the major inspirations include (but are not limited to):

- 🎥 **Preventing React re-renders with composition**  
  https://www.youtube.com/@DeveloperWay

- 📘 **Comprehensive guide on React re-renders**  
  https://www.developerway.com/posts/react-re-renders-guide

- 📘 **How to use `useMemo` and `useCallback` (and when not to)**  
  https://www.developerway.com/posts/how-to-use-memo-and-callback

- 📘 **React elements, children, parents, and re-renders**  
  https://www.developerway.com/posts/react-elements-children-parents

Additional videos and articles from the same source may be added as this folder grows.

---

## What This Folder Is NOT

- A performance library
- A framework or toolkit
- A claim of original research or ideas

All core concepts belong to their original authors.  
This code exists purely for **learning by reconstruction**.

---

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

---

### Running

```sh
npm run dev
```
