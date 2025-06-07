# my-task-app

A simple task manager application built with Next.js, TypeScript, Prisma, and Tailwind CSS.

## Features

*   View a list of tasks
*   Add new tasks
*   Admin panel to view all tasks and their details

## Technology Stack

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **ORM:** Prisma (with SQLite)
*   **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd my-task-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    Alternatively, if you use yarn:
    ```bash
    yarn install
    ```
3.  **Set up the database:**
    The project uses Prisma with an SQLite database. The database file (`prisma/dev.db`) is included in the repository, so it should work out of the box after installing dependencies.
    If you need to re-initialize the database or apply migrations (though none are explicitly defined beyond the initial one):
    ```bash
    npx prisma db push
    ```
    This command syncs your Prisma schema with the database.

### Running the Development Server

To start the development server:

```bash
npm run dev
```
The application will usually be available at `http://localhost:3000`.

## Available Scripts

*   `npm run dev`: Starts the development server with Turbopack.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts the production server (after building).
*   `npm run lint`: Lints the codebase using Next.js's ESLint configuration.

## API Endpoints

The application uses the following API endpoints to manage tasks:

*   `GET /api/tasks`: Fetches all tasks.
*   `POST /api/tasks`: Creates a new task.
    *   Request body: `{ "title": "Your task title" }`

## Project Structure (Brief Overview)

*   `src/app/`: Main application code (pages, API routes).
    *   `src/app/page.tsx`: The main task view and add task interface.
    *   `src/app/admin/page.tsx`: The admin panel for viewing tasks.
    *   `src/app/api/tasks/`: API route handlers for task operations.
*   `src/components/`: Reusable UI components.
*   `prisma/`: Prisma schema (`schema.prisma`) and database file (`dev.db`).
*   `public/`: Static assets.

This README provides a comprehensive overview of the project.
