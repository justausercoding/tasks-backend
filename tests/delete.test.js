import { expect, test, describe, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../app.js";
import initialTasks from "../data/initialTasks/initialTasks.js";
import { data } from "../data/databaseInstance.js";

describe("API DELETE tests", () => {
  beforeEach(() => {
    // The tasks are reseted (before each test) -> a deep copy is made
    data.tasks = JSON.parse(JSON.stringify(initialTasks));
  });

  test("DELETE /api/tasks/:id should delete a task", async () => {
    const id = data.getTasks()[0].id;
    const response = await request(app).delete(`/api/tasks/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
  });

  test("DELETE /api/tasks/:id wrong ID should not delete a task", async () => {
    const id = "0000";
    const response = await request(app).delete(`/api/tasks/${id}`);
    expect(response.status).toBe(404);
  });
});
