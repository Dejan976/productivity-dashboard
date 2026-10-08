/* Depending what time is showing message good morning,evening,afternoon*/
const welcome = document.getElementById("message");
const time = new Date().getHours();
if(time < 12){
   welcome.textContent = "Good Morning"
} else if(time < 18){
    welcome.textContent = "Good Afternoon";
}else {
     welcome.textContent = "Good Evening"
};


let tasks= JSON.parse(localStorage.getItem("tasks")) || [];
/*Getting elements from html*/
const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("task-priority");
const dayInput = document.getElementById("task-day");
const addTask = document.querySelector(".add-task");
const clearTask = document.querySelector(".clear-task");


/*Creating task card*/
function createTaskCard(task){
const li = document.createElement("li");
li.classList.add("task-card")
li.dataset.id = task.id;
li.dataset.priority = task.priority;
const title = document.createElement("p");
title.classList.add("task-title"); 
title.textContent = task.title;
const priority = document.createElement("span");
priority.textContent = task.priority.toUpperCase();
const completeBtn = document.createElement("button");
completeBtn.classList.add("complete-btn");
completeBtn.textContent="Complete";
const removeBtn = document.createElement("button");
removeBtn.classList.add("remove-btn");
removeBtn.textContent = "Remove";

completeBtn.addEventListener("click",()=>{
    li.classList.toggle("completed");
});

removeBtn.addEventListener("click",()=>{
    const taskIndex = tasks.findIndex(item => item.id === task.id);
if (taskIndex !== -1) {
 tasks.splice(taskIndex, 1);
 localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    li.remove();
   }); 
li.append(title,priority,completeBtn,removeBtn)
return li;
};
/* Add New Task  Function*/
function addNewTask(){
const title = taskInput.value.trim();
const priority = priorityInput.value.trim();
const day = dayInput.value;
if(title === ""){
    return;
}
const task = {
    id:Date.now(),
    title:title,
    priority:priority,
     day:day
    }

tasks.push(task);
const taskCard = createTaskCard(task);
const column = document.getElementById(day);
const taskList = column.querySelector("ul");
 taskList.append(taskCard);
localStorage.setItem("tasks",JSON.stringify(tasks));
 taskInput.value = "";
};
function loadTask(){
    tasks.forEach(task => {
        
const tascCard = createTaskCard(task);
 const column = document.getElementById(task.day);
 const taskList = column.querySelector("ul");
 taskList.append(tascCard);
});
};
loadTask();
addTask.addEventListener("click", () => {
    addNewTask();
});
