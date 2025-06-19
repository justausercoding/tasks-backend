import express from "express";
import { getAllTasks } from "../controllers/getAllTasks.js";
import { addNewTask } from "../controllers/addNewTask.js";
import { updateTask } from "../controllers/updateTask.js";
import { deleteTask } from "../controllers/deleteTask.js";

export const apiRouter = express.Router();

apiRouter.get("/tasks", getAllTasks);
apiRouter.post("/tasks", addNewTask);
apiRouter.patch("/tasks/:id", updateTask);
apiRouter.delete("/tasks/:id", deleteTask);
