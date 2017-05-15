// Write the interface for class Todo. It must have:

export interface TodoInterface {
  list: Array<string>;
  addTask(task: String) :void;
  listAllTasks(): void;
  deleteTask() :void;
}

// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
