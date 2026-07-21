# AI & ML Hub

A responsive static learning portal for notes, assignments, homework and the timetable.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Railway deployment

This project remains compatible with Railway without configuration changes:

- Build command: `npm install`
- Start command: `npm start`
- `server.js` uses Railway's `PORT` environment variable and serves this whole folder, including `files/` PDFs.

## Content

Add course PDF files under the matching folder inside `files/`, then add the matching link in the corresponding HTML page. Use forward slashes in links (for example, `files/notes/week-4.pdf`) so the URLs work on every platform.
