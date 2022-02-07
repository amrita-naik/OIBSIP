const addBtn = document.querySelector('.add-btn')
const addTask = document.querySelector('.add-task')
const closeBtn = document.querySelector('.close-btn')
const saveBtn = document.querySelector('.save-btn')
const taskList = document.querySelector('.task-list')
const inputTitle = document.querySelector('.input-title')
const inputDesc = document.querySelector('.input-desc')

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask.classList.add("show-add-task")
    addBtn.classList.add("hide-add-btn")
    closeBtn.classList.add("show-close-btn")
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask.classList.remove("show-add-task")
    addBtn.classList.remove("hide-add-btn")
    closeBtn.classList.remove("show-close-btn")
})

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const taskDiv = document.createElement("div");
    taskDiv.classList.add('task')

    const newTitle = document.createElement('p');
    newTitle.innerText= inputTitle.value;
    newTitle.classList.add('title')
    taskDiv.appendChild(newTitle)

    const newDesc = document.createElement('p');
    newDesc.innerText=inputDesc.value;
    newDesc.classList.add('desc')
    taskDiv.appendChild(newDesc)

    taskList.appendChild(taskDiv);
})