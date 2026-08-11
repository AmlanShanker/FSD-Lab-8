# 🎬 CineBook - Movie Ticket Booking System

CineBook is a full-stack **Movie Ticket Booking System** developed using **React, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB**.

The application follows a **RESTful API architecture** and provides a customer-centric movie booking experience where customers can register, log in, browse movies, view movie details, and book tickets.

---

## 🌐 Live Demo

### Frontend

https://cinebook-frontend-a39szss1q-amlanshankers-projects.vercel.app/

### Backend

https://lab8-server-isp3deem7-amlanshankers-projects.vercel.app/

### Movies API

https://lab8-server-isp3deem7-amlanshankers-projects.vercel.app/api/movies

---

## 📌 Project Overview

CineBook allows customers to:

* Register an account
* Login securely
* Browse available movies
* View movie details
* View movie posters
* Check movie genre and rating
* Check ticket prices
* Book movie tickets
* View their bookings
* Update bookings
* Cancel bookings

The backend provides RESTful APIs for authentication, movies, and bookings.

MongoDB Atlas is used as the database to store customer, movie, and booking information.

---

## 🚀 Features

### 👤 Customer Authentication

* Customer registration
* Customer login
* JWT-based authentication
* Password hashing
* Protected API routes
* Bearer token authentication

### 🎥 Movies

Customers can:

* View all movies
* View individual movie details
* View movie posters
* View movie genre
* View movie rating
* View ticket price

### 🎟️ Booking

Customers can:

* Book movie tickets
* Specify the number of tickets
* View their bookings
* Update booking details
* Cancel bookings
* View booking information

### 🔐 Security

* JWT authentication
* Password hashing
* Protected booking routes
* Authorization using Bearer tokens
* CORS configuration
* Environment variables for sensitive information

### 🎨 Frontend

The frontend provides:

* Responsive movie interface
* Movie cards
* Movie posters
* Movie details
* Login page
* Registration page
* Booking interface
* Customer booking section
* Immersive movie-themed UI

---

## 🛠️ Technology Stack

| Technology    | Purpose             |
| ------------- | ------------------- |
| React         | Frontend            |
| Vite          | Frontend build tool |
| Tailwind CSS  | UI styling          |
| Axios         | API communication   |
| Node.js       | Backend runtime     |
| Express.js    | RESTful API         |
| MongoDB Atlas | Database            |
| Mongoose      | MongoDB ODM         |
| JWT           | Authentication      |
| bcrypt        | Password hashing    |
| Vercel        | Deployment          |

---

# 📂 Project Structure

```text
lab8/
│
├── client/
│   │
│   ├── node_modules/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Loading.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   ├── Movies.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── api.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── server/
│   │
│   ├── config/
│   │   └── dbConfig.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Booking.js
│   │   ├── Customer.js
│   │   └── Movie.js
│   │
│   ├── node_modules/
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookingRoutes.js
│   │   └── movieRoutes.js
│   │
│   ├── .env
│   ├── insertMovies.js
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── vercel.json
│
└── .gitignore
```
---

# 🔌 RESTful API

The backend follows RESTful architecture using HTTP methods such as GET, POST, PUT, and DELETE.

## Authentication APIs

### Register Customer

```http
POST /api/auth/register
```

Example request:

```json
{
  "name": "Amlan",
  "email": "amlan@example.com",
  "password": "password123"
}
```

### Login Customer

```http
POST /api/auth/login
```

Example request:

```json
{
  "email": "amlan@example.com",
  "password": "password123"
}
```

The server returns a JWT token after successful authentication.

---

# 🎬 Movie APIs

### Get All Movies

```http
GET /api/movies
```

### Get Movie by ID

```http
GET /api/movies/:id
```

### Add Movie

```http
POST /api/movies
```

### Update Movie

```http
PUT /api/movies/:id
```

### Delete Movie

```http
DELETE /api/movies/:id
```

---

# 🎟️ Booking APIs

### Create Booking

```http
POST /api/bookings
```

Requires authentication.

```http
Authorization: Bearer <JWT_TOKEN>
```

### Get Customer Bookings

```http
GET /api/bookings/my
```

Requires authentication.

### Get Booking

```http
GET /api/bookings/:id
```

### Update Booking

```http
PUT /api/bookings/:id
```

### Delete Booking

```http
DELETE /api/bookings/:id
```

---

# 🗄️ MongoDB Database

The application uses **MongoDB Atlas** for persistent data storage.

Database:

```text
MovieDB
```

Collections:

```text
MovieDB
│
├── movies
├── customers
└── bookings
```

### Movie Document

Example:

```json
{
  "id": 1,
  "title": "Avengers: Doomsday",
  "genre": "Action",
  "rating": 4.8,
  "price": 250,
  "poster": "https://image.tmdb.org/..."
}
```

Movie posters are stored as image URLs and displayed directly in the React frontend.

---

# 🔐 Authentication Flow

```text
Customer
    |
    v
Register
    |
    v
Password Hashing
    |
    v
MongoDB
    |
    v
Login
    |
    v
JWT Token
    |
    v
localStorage
    |
    v
Axios Interceptor
    |
    v
Authorization: Bearer Token
    |
    v
Protected REST API
```

---

# 🔄 Application Architecture

```text
+---------------------------+
|      React Frontend       |
|    Vite + Tailwind CSS    |
+-------------+-------------+
              |
              | Axios / HTTP
              v
+---------------------------+
|      Express REST API     |
|          Node.js          |
+-------------+-------------+
              |
              | Mongoose
              v
+---------------------------+
|       MongoDB Atlas       |
|         MovieDB           |
+---------------------------+
```

---

# ⚙️ Installation and Setup

## 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

```bash
cd lab8
```

---

# 🖥️ Backend Setup

Navigate to the server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

Start the backend:

```bash
node server.js
```

The backend will run on:

```text
http://localhost:3000
```

---

# 💻 Frontend Setup

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000/api
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

# 🌍 Deployment

The project is deployed using Vercel.

## Frontend

```text
React + Vite + Tailwind CSS
            |
            v
          Vercel
            |
            v
CineBook Frontend
```

## Backend

```text
Node.js + Express
            |
            v
          Vercel
            |
            v
REST API
```

## Database

```text
MongoDB Atlas
```

---

# 🔗 Production Architecture

```text
+--------------------------------------+
|          CineBook Frontend           |
|                                      |
| https://cinebook-frontend-a39szss1q- |
| amlanshankers-projects.vercel.app/   |
+-------------------+------------------+
                    |
                    | HTTPS
                    v
+--------------------------------------+
|           Express REST API           |
|                                      |
| https://lab8-server.vercel.app/      |
+-------------------+------------------+
                    |
                    | Mongoose
                    v
+--------------------------------------+
|             MongoDB Atlas            |
|               MovieDB                |
+--------------------------------------+
```

---

# 🧪 API Testing

The REST APIs can be tested using:

* Postman
* Thunder Client
* Browser
* Axios
* React frontend

Example:

```http
GET https://lab8-server.vercel.app/api/movies
```

---

# 📚 RESTful Concepts Demonstrated

This project demonstrates the following RESTful concepts:

* REST architecture
* HTTP GET requests
* HTTP POST requests
* HTTP PUT requests
* HTTP DELETE requests
* JSON data exchange
* CRUD operations
* Express routing
* Express middleware
* MongoDB integration
* Mongoose models
* JWT authentication
* Protected routes
* CORS
* Axios API communication
* Cloud deployment

---

# 🎯 Project Objective

The objective of CineBook is to develop a simple and practical **RESTful Movie Ticket Booking System using Express.js and MongoDB**.

The project demonstrates how a React frontend communicates with a Node.js and Express backend through RESTful APIs, while MongoDB provides persistent storage for movies, customers, and bookings.

The system is designed to be **customer-centric**, allowing authenticated customers to browse movies and manage their movie ticket bookings.

---

# 👨‍💻 Author

**Amlan Shanker**

MCA - Computer Applications

---

# 📄 License

This project was developed for academic and educational purposes.
