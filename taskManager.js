function addTask(tasks, task) {
    if (!tasks.includes(task)) {
    tasks.push(task);
    console.log(`${task} has been added to the list!`);
    }
}

function listTasks(tasks) {
    console.log("CURRENT TASKS!")
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

module.exports = {addTask, listTasks};