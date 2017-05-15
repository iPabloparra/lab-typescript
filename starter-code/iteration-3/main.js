var TodoItem = (function () {
    function TodoItem(title) {
        this.status = true;
        this.updatedAt = new Date();
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        var s = this.status;
        if (s) {
            s = false;
        }
        else if (!s) {
            s = true;
        }
    };
    return TodoItem;
}());
var TodoList = (function () {
    function TodoList(list) {
        if (list === void 0) { list = []; }
        this.list = list;
        list = list;
    }
    TodoList.prototype.addTask = function (task) {
        this.list.push(task);
        console.log("\n      =========== NEW TASK ===========\n      Task " + task.title + " inserted in the list\n      ");
        return this.list.length;
    };
    TodoList.prototype.listAllTasks = function () {
        this.list.forEach(function (elem) {
            console.log(elem);
        });
    };
    TodoList.prototype.deleteTask = function (task) {
        var _this = this;
        var taskDeleted;
        this.list.forEach(function (elem, index) {
            if (elem.title === task.title) {
                taskDeleted = _this.list.splice(index, 1);
            }
        });
        console.log("\n      =========== TASK REMOVED ===========\n      Task " + taskDeleted.title + " removed from the list\n      ");
        return this.list.length;
    };
    return TodoList;
}());
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
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
