export function clearHTML(){
    const taskList = document.querySelector(".taskList");
    taskList.innerHTML = "";
}

export function renderTodos(taskText){
    const newTask = document.createElement("li");
    newTask.classList.add("taskContainer");
    newTask.innerHTML = `<input type="checkBox">
                        <span class="flexgrow">${taskText}</span>
                        <button class="deleteButton">&times;</button>`;
    document.querySelector(".taskList").appendChild(newTask);
    return newTask;
}