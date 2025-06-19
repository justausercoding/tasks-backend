import initialTasks from "./initialTasks/initialTasks.js";
import { DatabaseClass } from "./class/databaseClass.js";

// create an instance of the database which is then accessible from the controllers
const data = new DatabaseClass(initialTasks);

export { data };
