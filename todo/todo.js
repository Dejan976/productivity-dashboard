

const tasks= JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.querySelector(".add-task input");
const priorityInput = document.getElementById("task-priority");
const dayInput = document.getElementById("task-day");
const addTask = document.querySelector(".add-task");
const clearTask = document.querySelector(".clear-task");

function createTaskCard(task){
const li = document.createElement("li");
li.classList.add("task-card")
li.dataset.priority = task.priority;
const title = document.createElement("p");
title.classList.add("task-title"); 
title.textContent = task.title;
const priority = document.createElement("span");
priority.textContent=task.priority.toUpperCase();
const completeBtn = document.createElement("button");
completeBtn.classList.add("complete-btn");
completeBtn.textContent="Complete";
const removeBtn = document.createElement("button");
removeBtn.classList.add("remove-btn");
removeBtn.textContent = "Remove";

li.append(title,priority,completeBtn,removeBtn)
return li;
};

function addNewTask(){
const title = taskInput.value.trim();
const priority = priorityInput.value.trim();
const day = dayInput.value;
if(title === ""){
    return;
}
const task = {
    title:title,
    priority:priority,
     day:day
    }

tasks.push(task);

localStorage.setItem("tasks",JSON.stringify(tasks));

const tascCard = createTaskCard(task);

    const column = document.getElementById(day);
    const taskList = column.querySelector("ul");
    taskList.append(tascCard);
    taskInput.value = "";
};