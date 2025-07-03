import { database } from "../data/database.js";

export const updateTask = (req, res) => {
  const userId = req.headers["x-user-id"];
  if (!userId) {
    return res.status(400).json({ message: "Missing user id" });
  }

  const { id } = req.params;
  const updateData = req.body;

  // update a task in the database
  const result = database[userId].updateOneTask(id, updateData);

  if (result) {
    res.status(200).json({ message: "Task updated successfuly" });
  } else {
    res.status(500).json({ message: "Failed to update task" });
  }
};
