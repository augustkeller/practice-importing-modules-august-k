const taskManagers = require('./taskManager');
const fileHandlers = require('./fileHandler');
const path = require('path');

let toDo = ["eat", "pray", "love"];
fileHandlers.saveTasks('tasks.json', toDo);