var Todo = (function () {
    function Todo(list) {
        if (list === void 0) { list = []; }
        this.list = list;
        list = list;
    }
    Todo.prototype.addTask = function (task) {
        this.list.push(task);
        console.log("\n      =========== NEW TASK ===========\n      Task " + task + " inserted in the list\n      ");
        return this.list.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.list.forEach(function (elem) {
            console.log(elem);
        });
    };
    Todo.prototype.deleteTask = function (position) {
        var task = this.list.splice(position, 1);
        console.log("\n      =========== TASK REMOVED ===========\n      Task " + task + " removed from the list\n      ");
        return this.list.length;
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
