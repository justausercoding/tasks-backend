# Task app - Backend server with Express.js


Backend server built with **Express.js**. This server handels API requests for a **task management app** (To Do app).

<br>
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

<br>
## Testing


All API Endpoints are covered with tests using:
- Vitest
- Supertest


<br>
## Tech Stack:


- Express.js
- JavaScript
- Vitest
- Supertest
