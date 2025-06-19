import { expect, test, describe, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../app.js";
import initialTasks from "../data/initialTasks/initialTasks.js";
import { data } from "../data/databaseInstance.js";

describe("API PATCH tests", () => {
  beforeEach(() => {
    // The tasks are reseted (before each test) -> a deep copy is made
    data.tasks = JSON.parse(JSON.stringify(initialTasks));
  });

  test("PATCH /api/tasks/:id should update a task: done", async () => {
    const task = data.getTasks()[0];
    const done = true;
    const response = await request(app).patch(`/api/tasks/${task.id}`).send({ done });
    expect(response.status).toBe(200);
    expect(response.body.message).toMatch("Task updated successfuly");

    const updatedTask = data.getTasks()[0];
    expect(updatedTask.done === done).toBeTruthy();
  });

  test("PATCH /api/tasks/:id should update a task: name", async () => {
    const task = data.getTasks()[0];
    const name = "New name";
    const response = await request(app).patch(`/api/tasks/${task.id}`).send({ name });
    expect(response.status).toBe(200);
    expect(response.body.message).toMatch("Task updated successfuly");

    const updatedTask = data.getTasks()[0];
    expect(updatedTask.name === name).toBeTruthy();
  });

  test("PATCH /api/tasks/:id should update a task: description", async () => {
    const task = data.getTasks()[0];
    const description = "This is a test description";
    const response = await request(app)
      .patch(`/api/tasks/${task.id}`)
      .send({ description });
    expect(response.status).toBe(200);
    expect(response.body.message).toMatch("Task updated successfuly");

    const updatedTask = data.getTasks()[0];
    expect(updatedTask.description === description).toBeTruthy();
  });

  test("PATCH /api/tasks/:id should update a task: project", async () => {
    const task = data.getTasks()[0];
    const project = "Home";
    const response = await request(app).patch(`/api/tasks/${task.id}`).send({ project });
    expect(response.status).toBe(200);
    expect(response.body.message).toMatch("Task updated successfuly");

    const updatedTask = data.getTasks()[0];
    expect(updatedTask.project === project).toBeTruthy();
  });

  test("PATCH /api/tasks/:id should update a task: dueDate", async () => {
    const task = data.getTasks()[0];
    const dueDate = new Date().toISOString();
    const response = await request(app).patch(`/api/tasks/${task.id}`).send({ dueDate });
    expect(response.status).toBe(200);
    expect(response.body.message).toMatch("Task updated successfuly");

    const updatedTask = data.getTasks()[0];
    expect(updatedTask.dueDate === dueDate).toBeTruthy();
  });

  test("PATCH /api/tasks/:id should update a task: name and description", async () => {
    const task = data.getTasks()[0];

    const dueDate = new Date().toISOString();
    const name = "New name";
    const description = "This is a test description";
    const response = await request(app)
      .patch(`/api/tasks/${task.id}`)
      .send({ name, description });
    expect(response.status).toBe(200);
    expect(response.body.message).toMatch("Task updated successfuly");

    const updatedTask = data.getTasks()[0];
    expect(updatedTask.name === name).toBeTruthy();
    expect(updatedTask.description === description).toBeTruthy();
  });
});
