var list = [];
function addTask(task) {
    list.push(task);
    console.log("\n      =========== NEW TASK ===========\n      Task " + task + " inserted in the list\n      ");
    return list.length;
}
function listAllTasks() {
    list.forEach(function (elem) {
        console.log(elem);
    });
}
function deleteTask(position) {
    var task = list.splice(position, 1);
    console.log("\n      =========== TASK REMOVED ===========\n      Task " + task + " removed from the list\n      ");
    return list.length;
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
