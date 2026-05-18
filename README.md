# Portfolio Showcase (React + Vite)

A responsive React single-page app for showcasing a creative agency portfolio. Users can add projects, delete them with confirmation, and search through project titles in real time.

> Built as a simple in-memory demo: data is stored in React state only (no database / backend).

---

## Features

- **Project gallery (responsive grid)**: Cards show title, description, category, date, and details.
- **Add projects**: A form collects project fields and inserts the new project at the top of the list.
- **Delete projects**: “Remove” button asks for confirmation via a modal prompt.
- **Real-time search**: Filters projects by **title** as you type (case-insensitive).
- **Optimized rendering**: Uses `useMemo` for the filtered list.

---

## Known limitations

- **No persistence**: Refreshing the page resets all projects to the initial hardcoded set.
- **Image URL not displayed**: The form collects an `image` URL, but the current `ProjectCard` component does not render it (it’s a placeholder colored block).
- **Search scope**: Search only matches the **project title**, not description/category/details.

---

## Setup

From the `Summative Lab/` folder:

```bash
npm install
```

---

## Development / Running locally

```bash
npm run dev
```

Open the URL shown in your terminal (typically `http://localhost:5173`).

---

## Build (production)

```bash
npm run build
npm run preview
```

---

## Project structure

- `src/App.jsx`
  - Holds application state (`projects`, `searchTerm`)
  - Implements search filtering (`useMemo`)
  - Handles add/delete actions
- `src/components/`
  - `Header.jsx`: Branding header
  - `SearchBar.jsx`: Search input
  - `ProjectForm.jsx`: Form to add a project
  - `ProjectList.jsx`: Grid layout for project cards
  - `ProjectCard.jsx`: Individual project card UI + remove button

---

## GitHub

This repository is configured with a Git remote (`origin`) pointing to the author’s GitHub repo.

To publish changes:

```bash
git add .
git commit -m "Update README and add code comments"
git push
```
