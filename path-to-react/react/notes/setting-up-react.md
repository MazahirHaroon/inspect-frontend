## First: what you already have (important)

You have this:

```json
{
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3"
  }
}
```

That means:

✅ React code exists locally (inside node_modules)

❌ Browser cannot automatically use it

❌ Browser cannot understand JSX

❌ Browser cannot resolve import 'react' by itself

## `npm` installs code for Node-based tools, not for browsers

### Browsers:

- Don’t know what node_modules iș
- Don’t know what import 'react' means
- Don’t know JSX

That’s why bundlers exist.

## Minimal working setup (Without bundlers)

### Install a simple dev server

You still need a server (browser restriction).

```bash
npm install --save-dev serve
```

Add script:

```json
"scripts": {
  "dev": "serve ."
}
```

Run:

```bash
npm run dev
```

---

## In `index.html` (this is the critical part)

### ✅ You MUST use:

- ES modules
- Import maps

## Run Babel manually

### Install Babel

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-react
```

### Babel config (`.babelrc`)

```json
{
  "presets": ["@babel/preset-react"]
}
```

### Convert JSX yourself

```bash
npx babel src --out-dir dist
```
