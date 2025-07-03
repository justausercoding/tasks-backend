import { database } from "../data/database.js";

export const deleteTask = (req, res) => {
  const userId = req.headers["x-user-id"];
  if (!userId) {
    return res.status(400).json({ message: "Missing user id" });
  }

  const { id } = req.params;

  // delete a task from the database
  const result = database[userId].deleteOneTask(id);

  if (result) {
    res.status(200).json({ message: "Task deleted successfully", id });
  } else {
    res.status(404).json({ message: "Task not deleted: it was not found" });
  }
};
