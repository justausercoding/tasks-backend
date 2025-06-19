import { expect, test, describe, it, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../app.js";
import initialTasks from "../data/initialTasks/initialTasks.js";
import { data } from "../data/databaseInstance.js";

describe("API POST tests", () => {
  beforeEach(() => {
    // The tasks are reseted (before each test) -> a deep copy is made
    data.tasks = JSON.parse(JSON.stringify(initialTasks));
  });

  it("POST /api/tasks should add a new task", async () => {
    const newTask = {
      name: "Test",
      description: "Testing the API",
      project: "Test",
      dueDate: new Date().toISOString(),
    };

    const response = await request(app).post("/api/tasks").send(newTask);
    expect(response.status).toBe(201);
    expect(response.body.message).toMatch("Task added successfuly");

    const tasks = data.getTasks();
    expect(tasks.find((task) => task.name === newTask.name)).toBeTruthy();
  });

  it("POST /api/tasks should fail with missing fields", async () => {
    const newTask = {
      name: "Test",
      description: "Testing a task with missing fields",
    };
    const response = await request(app).post("/api/tasks").send(newTask);
    expect(response.status).toBe(400);
    expect(response.body.message).toMatch("Required fields are missing");
  });
});
