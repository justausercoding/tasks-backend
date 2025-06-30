import initialTasks from "./initialTasks/initialTasks.js";
import { DatabaseClass } from "./class/DatabaseClass.js";

// create an instance of the database which is then accessible from the controllers
const data = new DatabaseClass(initialTasks);

export { data };
