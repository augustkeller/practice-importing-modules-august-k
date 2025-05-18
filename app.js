const taskManagers = require('./taskManager');
const fileHandlers = require('./fileHandler');
const path = require('path');


const toDolist = fileHandlers.loadTasks('tasks.json');
taskManagers.addTask(toDolist, "nap");
taskManagers.listTasks(toDolist);
fileHandlers.saveTasks('tasks.json', toDolist);

