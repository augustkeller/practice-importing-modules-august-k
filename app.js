const taskManagers = require('./taskManager');
const fileHandlers = require('./fileHandler');
const path = require('path');

const filePath = path.join(__dirname, "tasks.json");

const toDolist = fileHandlers.loadTasks(filePath); //filePath
taskManagers.addTask(toDolist, "nap");
taskManagers.addTask(toDolist, "nap again");
taskManagers.listTasks(toDolist);
fileHandlers.saveTasks(filePath, toDolist);

