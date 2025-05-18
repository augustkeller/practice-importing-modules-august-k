function addTask(tasks, task) {
    tasks.push(task);
}

function listTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

module.exports = {addTask, listTasks};