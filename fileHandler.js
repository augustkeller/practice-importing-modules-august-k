const fs = require('fs');

 function saveTasks(filePath, tasks) {
    const taskString = JSON.stringify(tasks);
    fs.writeFileSync(filePath, taskString);
    console.log(`Tasks saved to file.`);
 }

 function loadTasks(filePath) {
   if (!fs.existsSync(filePath)){
        return [];
    } else
    {
    const loadedTasks = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(loadedTasks);
    return parsed;
    }
 }

 module.exports = {saveTasks, loadTasks};