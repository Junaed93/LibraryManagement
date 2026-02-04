# Library Management System

A full-stack Library Management System with a Spring Boot backend and a React (Vite) frontend.

## Project Structure

- **`backend/`**: Contains the Spring Boot application (Java).
- **`frontend/`**: Contains the React application (JS/JSX).
- **`index.html`**: The entry point for the web application (located at root as requested).

## Setup & Running

### Prerequisites
- Java 17+
- Node.js 18+

### 1. Backend (Spring Boot)

Navigate to the `backend` directory and run:

```bash
cd backend
# Windows
.\gradlew bootRun

# Linux/Mac
./gradlew bootRun
```

The backend server will start at `http://localhost:8080`.

### 2. Frontend (React)

The frontend is configured to run from the root index.html.

```bash
cd frontend
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## Features
- **Books**: Add, list, and check availability of books.
- **Members**: Register and list members.
- **Circulation**: Borrow and return books with real-time status updates.
