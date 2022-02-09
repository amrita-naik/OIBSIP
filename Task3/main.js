window.addEventListener('load', () => {
    const taskForm = document.querySelector('.form-control')
    const taskList = document.querySelector('.task-list')
    const inputTitle = document.querySelector('.input-title')
    const inputDesc = document.querySelector('.input-desc')
    const completedList = document.querySelector('.completed-list')

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const taskDiv = document.createElement("div");
        taskDiv.classList.add('task')

        const newTitle = document.createElement('p');
		newTitle.classList.add('title');
		newTitle.innerHTML = inputTitle.value;

        taskDiv.appendChild(newTitle)

        const newDesc = document.createElement('p');
        newDesc.classList.add('desc')
        newDesc.innerHTML=inputDesc.value;

        taskDiv.appendChild(newDesc)

        const newIcons = document.createElement('div')
        newIcons.classList.add('icons')

        const newDelete = document.createElement('button');
        newDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style="fill: #eb5b5b;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>'
        newDelete.classList.add('icon')
        newIcons.appendChild(newDelete)

        const newCheck = document.createElement('button');
        newCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: #a3d16a;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>'
        newCheck.classList.add('icon')
        newIcons.appendChild(newCheck)

        taskDiv.appendChild(newIcons)

        taskList.appendChild(taskDiv);

        inputTitle.value=''
        inputDesc.value=''

        newCheck.addEventListener('click', checkedTask)

        function checkedTask() {
            taskDiv.remove()
            completedList.appendChild(taskDiv)
            newIcons.removeChild(newCheck)
            taskDiv.classList.add('checked-task')
            newTitle.classList.add('pointer-class')
        }

        newDelete.addEventListener('click', deleteTask)

        function deleteTask() {
            taskDiv.classList.add('fall')
            taskDiv.addEventListener('animationend', function() {
                taskDiv.remove()
            })
        }

        newTitle.addEventListener('click', uncheckTask)

        function uncheckTask() {
            taskList.appendChild(taskDiv)
            taskDiv.classList.remove('checked-task')
            newTitle.classList.remove('pointer-class')
            newIcons.appendChild(newCheck)
        }


    })
})