# Murakami Web — Local EPUB Web Reader

This project is a minimal web application for viewing EPUB books, built with Vite, React, and TypeScript. It includes a book catalog, book pages, and an integrated reader with navigation and keyboard controls.

## Technologies

- Vite
- React + TypeScript
- Epub.js (reader integrated via custom hooks)
- Docker / docker-compose (optional)

## Quick Start (Local)

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

Open http://localhost:5173 (Vite default port).

3. Build for production and preview:

```bash
npm run build
npm run preview
```

## Docker (optional)

Build and run the container with `docker-compose`:

```bash
docker-compose up --build
```

After startup the app will be available at the address defined in `docker-compose.yml`.

## Project Structure (key directories)

- `public/books/epubs/` — EPUB files available for reading.
- `src/` — application source:
  - `app/routes/` — routes and lazy pages
  - `features/reader/` — reader hook and logic (`useEpubReader`)
  - `features/popular-books/` — book list / card components
  - `pages/` — application pages (`HomePage`, `BookPage`, `ReaderPage`)

## Adding Books

1. Place the `.epub` file into `public/books/epubs/`.
2. Update the data source (`src/entities/book/books.ts`) if needed to add metadata (title, author, file path).

## Features

- Integrated EPUB reader with navigation
- Keyboard controls for reading
- Lazy-loaded pages for faster startup
