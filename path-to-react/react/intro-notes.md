# Running a React App with Vite (Teaching Notes)

This session explains **how React apps are actually run in production**, and then breaks down **why tools like Vite are used**, step by step.

The goal is not to memorize commands, but to understand **what problems Vite solves**.

---

## 0. Start With Reality (Very Important)

### What I tell the student first

> “I’m not going to show you the simplest way first.  
> I’ll show you the **real way apps are built and shipped in companies**.”

In real projects:

- We do NOT use CDN
- We do NOT run Babel in the browser
- We do NOT open `index.html` directly

We use a **build tool**.

Today, that tool is **Vite**.

---

## 1. The Production Way (High Level)

### What actually happens in production

1. Developers write React code
2. Tooling builds it into browser-ready files
3. Browser downloads **plain JavaScript, HTML, CSS**
4. React runs in the browser

📌 **React itself never runs in Node**  
📌 **Node is only for tooling**

---

## 2. The Easiest Real-World Setup (Vite)

### Command we run

```bash
npm create vite@latest
```

````

Then we choose:

- Framework: React
- Variant: JavaScript / TypeScript

This is the **simplest correct way** to start a React app today.

---

## 3. What Did Vite Actually Do?

### After the command finishes, Vite has:

- Created a project structure
- Installed dependencies
- Configured the build pipeline
- Set up a dev server

Without us touching **Webpack, Babel, or config files**.

---

## 4. Let’s Break It Down Piece by Piece

### 4.1 What React needs (minimum)

React alone needs:

- `react` → core UI logic
- `react-dom` → talk to the browser DOM

```bash
npm install react react-dom
```

But **this alone is NOT enough**.

Why?

Because:

- Browser can’t resolve `import React from "react"`
- Browser can’t run JSX
- Browser can’t handle `process.env`
- Browser can’t bundle files

---

## 5. What Vite Provides (This Is the Key Part)

### Vite is NOT React

Vite provides **everything React does not**.

---

### 5.1 Development Server

Vite gives:

- Local server (`localhost`)
- Fast reload
- Module-based loading

Why needed:

- Browsers block `file://` imports
- ES modules need a server

---

### 5.2 Module Resolution

You write:

```js
import React from 'react';
```

Vite:

- Looks inside `node_modules`
- Finds the correct file
- Serves it to the browser

📌 Browser cannot do this on its own.

---

### 5.3 JSX Transformation

You write:

```jsx
<h1>Hello</h1>
```

Vite:

- Runs JSX → `React.createElement`
- Uses Babel / esbuild internally
- Browser never sees JSX

📌 JSX is a **build-time feature**, not runtime.

---

### 5.4 CommonJS → ESM Conversion

Many npm packages (including React internals):

- Use CommonJS
- Use `require`
- Use `process.env`

Vite:

- Converts CommonJS to ESM
- Rewrites `process.env`
- Makes code browser-safe

---

### 5.5 Environment Handling

You write:

```js
if (process.env.NODE_ENV === 'production') {
}
```

Vite:

- Replaces this at build time
- Removes dead code
- Optimizes output

Browser:

- Has no `process`
- Never sees this logic

---

### 5.6 Production Bundling

In development:

- Vite serves files as ES modules

In production:

- Vite bundles everything
- Minifies code
- Tree-shakes unused logic
- Outputs optimized assets

📌 This is where performance comes from.

---

## 6. Why We Don’t Start With Vite Immediately

### Teaching reason

If we start with Vite:

- It feels like magic
- Students don’t know what problem it solves
- Tooling looks unnecessary

So we first show:

1. CDN (simple)
2. ESM imports (modern JS)
3. npm packages (raw reality)
4. Errors & limitations
5. Then Vite as the solution

---

## 7. The Mental Model (Must Be Clear)

### What React does

- UI logic
- State
- Rendering
- Components

### What Vite does

- Makes React usable in real apps
- Handles build pipeline
- Handles browser compatibility

They solve **different problems**.

---

## 8. One-Liners to Use While Teaching

- “React is a library, Vite is an environment.”
- “React describes UI, Vite delivers it to the browser.”
- “Node is for tools, browser is for users.”
- “Bundlers translate developer JavaScript into browser JavaScript.”

---

## 9. Final Summary (Close the Session With This)

> “We use Vite not because React needs it,
> but because browsers do.”

React works anywhere.
Browsers have strict rules.
Vite bridges that gap.

---

````
