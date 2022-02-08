window.addEventListener('load', () => {
    const addBtn = document.querySelector('.add-btn')
    const addTask = document.querySelector('.add-task')
    const closeBtn = document.querySelector('.close-btn')
    const saveBtn = document.querySelector('.save-btn')
    const taskList = document.querySelector('.task-list')
    const inputTitle = document.querySelector('.input-title')
    const inputDesc = document.querySelector('.input-desc')
    const completedList = document.querySelector('.completed-list')

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

        const newIcons = document.createElement('div')
        newIcons.classList.add('icons')

        const newCheck = document.createElement('button');
        newCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: #a3d16a;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>'
        newCheck.classList.add('icon')
        newIcons.appendChild(newCheck)

        const newDelete = document.createElement('button');
        newDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style="fill: #eb5b5b;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>'
        newDelete.classList.add('icon')
        newIcons.appendChild(newDelete)

        taskDiv.appendChild(newIcons)

        taskList.appendChild(taskDiv);

        addTask.classList.remove("show-add-task")
        addBtn.classList.remove("hide-add-btn")
        closeBtn.classList.remove("show-close-btn")

        inputTitle.value=''
        inputDesc.value=''

        newCheck.addEventListener('click', checkedTask)

        function checkedTask() {
            taskDiv.remove()
            completedList.appendChild(taskDiv)
            taskDiv.classList.add('checked-task')
            newIcons.removeChild(newCheck)
        }

        newDelete.addEventListener('click', deleteTask)

        function deleteTask() {
            taskDiv.classList.add('fall')
            taskDiv.addEventListener('animationend', function() {
                taskDiv.remove()
            })
        }

        completedList.addEventListener('click', uncheckTask)

        function uncheckTask() {
            taskDiv.remove()
            taskList.appendChild(taskDiv)
            taskDiv.classList.remove('checked-task')
            newIcons.appendChild(newCheck)
        }
    })
})
