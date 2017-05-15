// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
class TodoItem {
  status = true;
  updatedAt = new Date();

  constructor (title: string) {
    this.title = title;

  }

  toggleStatus() {
    var s = this.status;
    if(s) {
      s = false;
    }else if (!s) {
      s = true;
    }
  }
}

class TodoList {
  constructor (public list: Array<string> = []){
    list = list;
  }

  addTask(task: any) {
    this.list.push(task);
    console.log(`
      =========== NEW TASK ===========
      Task ${task.title} inserted in the list
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

  deleteTask(task: any) {
    var taskDeleted;
    this.list.forEach((elem, index) => {
      if(elem.title === task.title) {
        taskDeleted = this.list.splice(index, 1);
      }
    })
    console.log(`
      =========== TASK REMOVED ===========
      Task ${taskDeleted.title} removed from the list
      `);
    return this.list.length;
  }
}

// Create class TodoList that implements the corresponding interface

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
