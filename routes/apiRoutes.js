import express from "express";
import tasks from "../data/database.js";
import { nanoid } from "nanoid";

export const apiRouter = express.Router();

apiRouter.get("/tasks", (req, res) => {
  res.json(tasks);
});

apiRouter.post("/tasks", (req, res) => {
  if (
    !("name" in req.body) ||
    !req.body.name ||
    !("description" in req.body) ||
    !("project" in req.body) ||
    !("addedDate" in req.body) ||
    !("dueDate" in req.body)
  ) {
    res.status(400).json({ message: "required fields are missing" });
  }

  const { name, description, project, addedDate, dueDate } = req.body;

  const newTask = {
    name,
    description,
    project,
    dueDate,
    addedDate,
  };

  newTask.id = nanoid();
  newTask.done = false;
  newTask.doneDate = null;

  tasks.push(newTask);

  res.status(201).json({ message: "task added successfuly" });
});
