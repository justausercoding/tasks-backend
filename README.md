# DuNau (Backend)
## Todo app - Backend server built with Express.js


Backend server built with **Express.js**. This server handles API requests for a **task management app**.

This backend works together with a frontend app built with React (see repository [dunau-frontend](https://github.com/pass-r/dunau-frontend)).

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
- Deletes one task


**Note:** Currently, tasks are stored in memory, so they will be lost when the server restarts.

## Deployment



The backend server is deployed on a VPS to ensure tasks are accessible online. It is managed with PM2 (a Node.js process manager) and secured with HTTPS.


## Testing


All API Endpoints are covered with tests using:
- Vitest
- Supertest


## Tech Stack:


- Express.js
- JavaScript
- Vitest
- Supertest
