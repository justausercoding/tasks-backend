import { expect, test, describe, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../app.js";
import initialTasks from "../data/initialTasks/initialTasks.js";
import { data } from "../data/databaseInstance.js";

describe("API GET tests", () => {
  beforeEach(() => {
    // The tasks are reseted (before each test) -> a deep copy is made
    data.tasks = JSON.parse(JSON.stringify(initialTasks));
  });

  test("GET /api/tasks should return all tasks", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(48);
    expect(typeof response.body[0]).toBe("object");
  });

  test("GET /api/task should return 404", async () => {
    const response = await request(app).get("/api/task");
    expect(response.status).toBe(404);
  });
});
