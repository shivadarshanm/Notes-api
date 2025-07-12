# Notes API

A simple RESTful Notes API with user authentication and CRUD operations.

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- JWT authentication
- Railway for deployment

## 📌 Endpoints

- `POST /api/auth/register` — Register user
- `POST /api/auth/login` — Login user, returns JWT
- `POST /api/notes` — Create note (auth required)
- `GET /api/notes` — Get all notes (auth required)
- `PUT /api/notes/:id` — Update note (auth required)
- `DELETE /api/notes/:id` — Delete note (auth required)

## 🔒 How to use

1. Register → copy JWT
2. Use `Bearer <token>` in `Authorization` header
3. Call notes endpoints

## 📡 Live API

[View deployed API](https://your-railway-url.up.railway.app)

## ✅ Author

**M Shivadarshan**
