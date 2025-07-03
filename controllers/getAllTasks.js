import { database } from "../data/database.js";
import initialTasks from "../data/initialTasks/initialTasks.js";
import { DatabaseClass } from "../data/class/DatabaseClass.js";

export const getAllTasks = (req, res) => {
  // gets all the tasks from the database
  const userId = req.headers["x-user-id"];
  if (!userId) {
    return res.status(400).json({ message: "Missing user id" });
  }

  if (!database[userId]) {
    database[userId] = new DatabaseClass(JSON.parse(JSON.stringify(initialTasks)));
  }

  res.json(database[userId].getTasks());
};
