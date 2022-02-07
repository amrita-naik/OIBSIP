const addBtn = document.querySelector('.add-btn')
const addTask = document.querySelector('.add-task')
const closeBtn = document.querySelector('.close-btn')

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