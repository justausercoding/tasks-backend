import { data } from "../data/databaseInstance.js";

export const getAllTasks = (req, res) => {
  // gets all the tasks from the database
  res.json(data.getTasks());
};
