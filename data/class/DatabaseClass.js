import { nanoid } from "nanoid";

class DatabaseClass {
  constructor(tasks = []) {
    this.tasks = tasks;
  }
  /**
   * Returns all the tasks from the database
   *
   * @returns {array} Returns an array with all the tasks (as objects)
   */
  getTasks() {
    return this.tasks;
  }

  /**
   * Adds a task to the database and returns true if it was successful
   *
   * @param {object} name - e.g. {name: "example name"}
   * @param {object} description - e.g. {description: "example description"}
   * @param {object} project - e.g. {project: "example project name"}
   * @param {object} dueDate - e.g. {dueDate: string}
   * @returns {boolean} Returns true if the task was added to the database otherwise 'false'
   */
  addOneTask(name, description, project, dueDate) {
    const length = this.tasks.length;

    const newTask = {
      id: nanoid(),
      name,
      description,
      project,
      done: false,
      dueDate,
      addedDate: new Date().toISOString(),
      doneDate: null,
    };

    const lengthUpdated = this.tasks.push(newTask);

    if (length !== lengthUpdated) return true;
    else return false;
  }

  /**
   * Updates a task in the database and returns true if it was successful
   *
   * @param {string} id - the id of the task that is going to be updated
   * @param {object} data - e.g. {description: "some text", project: "project name"} / the following keys can be passed in: name (string) , description (string), project (string), done (boolean)
   * @returns {boolean} Returns true if the task was updated in the database otherwise 'false'.
   */
  updateOneTask(id, data) {
    const oneTask = this.tasks.find((t) => t.id === id);

    if (oneTask) {
      if ("name" in data && data.name) oneTask.name = data.name;

      if ("description" in data) oneTask.description = data.description;

      if ("project" in data) oneTask.project = data.project;

      if ("done" in data) {
        oneTask.done = data.done;

        if (data.done === true) {
          oneTask.doneDate = new Date().toISOString();
        } else {
          oneTask.doneDate = null;
        }
      }

      if ("dueDate" in data) oneTask.dueDate = data.dueDate;
      return true;
    }
    return false;
  }

  /**
   * Deletes a task from the database and returns true if it was successful
   *
   * @param {string} id - the id of the task that is going to be deleted
   * @returns {boolean} Returns true if the task was deleted from the database otherwise 'false'.
   */
  deleteOneTask(id) {
    console.log("-- inside of delteOneTask - id: ", id);
    for (let i = 0; i < this.tasks.length; i++) {
      if (id === this.tasks[i].id) {
        this.tasks.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

export { DatabaseClass };
