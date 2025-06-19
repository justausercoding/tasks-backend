import { data } from "../data/databaseInstance.js";

export const updateTask = (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  // update a task in the database
  const result = data.updateOneTask(id, updateData);

  if (result) {
    res.status(200).json({ message: "Task updated successfuly" });
  } else {
    res.status(500).json({ message: "Failed to update task" });
  }
};
