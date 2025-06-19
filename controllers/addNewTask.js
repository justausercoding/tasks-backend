import { data } from "../data/databaseInstance.js";

export const addNewTask = (req, res) => {
  // check if data is all right
  if (
    !("name" in req.body) ||
    !req.body.name ||
    !("description" in req.body) ||
    !("project" in req.body) ||
    !("dueDate" in req.body)
  ) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  // add a new task to the database
  const { name, description, project, dueDate } = req.body;

  const result = data.addOneTask(name, description, project, dueDate);

  if (result) {
    res.status(201).json({ message: "Task added successfuly" });
  } else {
    res.status(500).json({ message: "Failed to add task" });
  }
};
