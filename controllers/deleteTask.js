import { data } from "../data/databaseInstance.js";

export const deleteTask = (req, res) => {
  const { id } = req.params;

  // delete a task from the database
  const result = data.deleteOneTask(id);

  if (result) {
    res.status(200).json({ message: "Task deleted successfully", id });
  } else {
    res.status(404).json({ message: "Task not deleted: it was not found" });
  }
};
