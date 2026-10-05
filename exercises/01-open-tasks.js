const tasks = [
  { id: 1, title: "Review proposal", assignedUserId: 7, status: "todo" },
  { id: 2, title: "Send invoice", assignedUserId: 3, status: "todo" },
  { id: 3, title: "Update brief", assignedUserId: 7, status: "done" },
  { id: 4, title: "Prepare meeting", assignedUserId: 7, status: "in_progress" },
];

const emptyTaskList = [];

function getOpenTaskTitles(tasks, userId) {
    console.log("userID: " + userId)
    let titleList = [];
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if(task.assignedUserId === userId && task.status !== "done") {
            titleList.push(task.title) 
        }
    }
    return titleList;
}

console.log("Query user 7...");
console.log(getOpenTaskTitles(tasks, "7"));

console.log("Query user 7 as an integer...");
console.log(getOpenTaskTitles(tasks, 7));

console.log("Query unknown user...");
console.log(getOpenTaskTitles(tasks, 5));

console.log("Query empty taask list...");
console.log(getOpenTaskTitles(emptyTaskList, 7));

const exampleTasks = [{ title: "Original" }];
let selectedTask = exampleTasks[0];

selectedTask.title = "Edited";
console.log(exampleTasks[0].title); // Prediction 1?

selectedTask = { title: "Replacement" };
console.log(exampleTasks[0].title); // Prediction 2?

function renameTask(task, newTitle) {
    return { ...task, title : newTitle};
}

const uneditedTaskTitle = tasks[3].title
const newTaskTitle = "new title";
const editedTask = renameTask(tasks[3], newTaskTitle);

console.log("edited task title:" + editedTask.title);
console.log("original task title:" + tasks[3].title);
console.log(uneditedTaskTitle === tasks[3].title);
console.log(editedTask.title === newTaskTitle);
console.log(editedTask === tasks[3]);