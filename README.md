# Task app - Backend server with Express


A backend server built with **Express.js** to practice backend developement. This server handels API requests for a **task management app** (todo app).

## Available API Endpoints

### GET /api/tasks
- Fetches all tasks from the database

### POST /api/tasks
- Accepts a new task as JSON and adds it to the database.

### PATCH /api/tasks/:id
- Updates a task with the given ID.
- Accepts a one or more key-value pairs as a JSON object in the request body.
- Only the provided fields will be updated.

### DELETE /api/tasks/:id
- Deletes one tasks


**Note:** Currently, tasks are stored in memory, so they will be lost when the server restarts.



## Tools used:


- Express.js
- JavaScript
- Vitest (with Supertest)
