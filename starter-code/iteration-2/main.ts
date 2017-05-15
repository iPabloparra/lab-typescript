// Add the reference to the "TodoInterface"

interface TodoInterface {
  list: Array<string>;
  addTask(task: String) :void;
  listAllTasks(): void;
  deleteTask() :void;
}
// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  constructor (public list: Array<string> = []){
    list = list;
  }

  addTask(task: string) {
    this.list.push(task);
    console.log(`
      =========== NEW TASK ===========
      Task ${task} inserted in the list
      `);
    return this.list.length;
  }

  // 3. Create a function to list all tasks, it must show in the console de task.

  listAllTasks() {
    this.list.forEach((elem) => {
      console.log(elem);
    });
  }

  // 4. Create a function to delete a task, you must find the task inside the array and delete it.

  deleteTask(position: number) {
    var task = this.list.splice(position, 1);
    console.log(`
      =========== TASK REMOVED ===========
      Task ${task} removed from the list
      `);
    return this.list.length;
  }

}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
