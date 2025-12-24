## File vs Server — Browser Loading Explained

## Opening an HTML file is not a server?

Opening `file://index.html` means:

- The browser reads the file directly from disk
- There is no HTTP request–response cycle
- No real HTTP headers or server-generated status codes
- Any status shown is browser-internal, not HTTP
- No valid origin is created
- The browser is acting as a document viewer, not an HTTP client

## This is file access, not serving.

When the browser loads anything (HTML, CSS, JS, image), it uses one unified loading pipeline:

```
request → resolve → load → parse → execute/render
```

So DevTools labels the action as:

```
Method: GET
```

But:

- ❌ It is **not** an HTTP GET
- ❌ No request is sent over a network
- ❌ No server receives anything

If it were a real server request, you’d see:

```
Protocol: http / https
```

Instead, when opening files directly, you’ll see:

```
Protocol: file
```

---

## Why does the HTML show in the browser then?

Because **HTML itself does not require a server**.

HTML is just a document.

When you open it:

- The browser reads the file
- Parses the markup
- Builds the DOM
- Renders it

That works perfectly fine from disk.

---

## What makes something a server?

A server is any program that:

- Listens on a port
- Accepts requests
- Responds using a protocol (HTTP)

Examples:

- `npx serve`
- Vite dev server
- Express app

These create a real origin like:

```
http://localhost:3000
```

---

## Key takeaway

> **Rendering a file is not the same as serving a file.**

- Rendering → browser capability
- Serving → server responding over HTTP

Seeing `GET` in DevTools does **not** automatically mean a server exists.
