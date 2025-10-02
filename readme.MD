# Portfolio Backend API

A backend server for a full-stack Portfolio Website, built with **Node.js**, **Express.js**, **MongoDB**, and **TypeScript**. This API handles **projects, blogs, about-me info, and admin authentication** for your portfolio site.

---

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Description

This backend powers a personal portfolio website. It supports:

- Admin authentication and JWT token handling
- CRUD operations for Projects
- CRUD operations for Blogs
- Viewing and updating About Me section
- Protected routes for admin-only operations

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **TypeScript**
- **bcryptjs** (password hashing)
- **jsonwebtoken** (JWT authentication)

---

## Features

- Secure admin authentication with JWT
- Full CRUD for Projects and Blogs
- About Me section with editable content
- Role-based access control (admin vs public)
- Sorted project/blog listing by creation date

---

## API Endpoints

### Admin Authentication

| Method | Endpoint           | Description              | Access |
| ------ | ------------------ | ------------------------ | ------ |
| POST   | `/api/admin/login` | Admin login, returns JWT | Public |

### Projects

| Method | Endpoint            | Description              | Access |
| ------ | ------------------- | ------------------------ | ------ |
| GET    | `/api/projects`     | Get all projects         | Public |
| GET    | `/api/projects/:id` | Get single project by ID | Public |
| POST   | `/api/projects`     | Create a project         | Admin  |
| PUT    | `/api/projects/:id` | Update project by ID     | Admin  |
| DELETE | `/api/projects/:id` | Delete project by ID     | Admin  |

### Blogs

| Method | Endpoint         | Description                       | Access |
| ------ | ---------------- | --------------------------------- | ------ |
| GET    | `/api/blogs`     | Get all blogs                     | Public |
| GET    | `/api/blogs/:id` | Get blog by ID (+ increment view) | Public |
| POST   | `/api/blogs`     | Create a blog                     | Admin  |
| PUT    | `/api/blogs/:id` | Update blog by ID                 | Admin  |
| DELETE | `/api/blogs/:id` | Delete blog by ID                 | Admin  |

### About Me

| Method | Endpoint     | Description          | Access |
| ------ | ------------ | -------------------- | ------ |
| GET    | `/api/about` | Get About Me info    | Public |
| PUT    | `/api/about` | Update About Me info | Admin  |

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio-backend.git
cd portfolio-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create .env file (follow env.example)**

4. **Run the server**

```bash
# Development mode with ts-node
npm run dev

# Production build
npm run build
npm start
```

Server will run on http://localhost:5000 by default (or your configured port).
