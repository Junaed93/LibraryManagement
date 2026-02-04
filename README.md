# 📚 Library Management System

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A modern, full-stack **Library Management System** built to streamline library operations. This application features a robust **Spring Boot** backend and a dynamic **React** frontend, delivering a seamless experience for managing books, members, and circulation records.

---

## 🛠️ Technology Stack

### **Backend**

- **Framework**: [Spring Boot 3.x](https://spring.io/projects/spring-boot)
- **Language**: Java 17
- **Database**: H2 (In-memory) / JPA
- **Build Tool**: Gradle

### **Frontend**

- **Framework**: [React 19](https://react.dev/)
- **Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: CSS Modules / Standard CSS
- **HTTP Client**: Axios

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### **Prerequisites**

Ensure you have the following installed:

- [Java JDK 25](https://www.oracle.com/java/technologies/downloads/)
- [Node.js 22](https://nodejs.org/)

### **Installation & Running**

#### **1. Backend Setup**

Launch the Spring Boot server to handle API requests and database operations.

```bash
cd backend
# Windows
.\gradlew bootRun

# Mac/Linux
./gradlew bootRun
```

_The server will start at `http://localhost:8080`_
_H2 Console available at `http://localhost:8080/h2-console`_

#### **2. Frontend Setup**

Start the client-side application.

```bash
cd frontend
npm install
npm run dev
```

_The application will launch at `http://localhost:5173`_

---

## ✨ Features

- **📖 Book Management**: Easily add, update, and search for books in the library catalog.
- **👥 Member Services**: Register new members and manage their accounts.
- **🔄 Circulation System**: Efficiently handle book borrowings and returns with real-time status tracking.
- **📊 Real-time Availability**: Instantly check if a book is available for borrowing.

---

## 📂 Project Structure

```bash
LibraryManagement/
├── backend/            # Spring Boot Server (Java)
├── frontend/           # React Client (Vite)
├── index.html          # Web Entry Point
└── README.md           # Project Documentation
```

---

Made with ❤️ by [Your Name]
