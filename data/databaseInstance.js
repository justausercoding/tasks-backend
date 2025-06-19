import initialTasks from "./initialTasks/initialTasks.js";
import { DatabaseClass } from "./class/databaseClass.js";

const data = new DatabaseClass(initialTasks);

export { data };
