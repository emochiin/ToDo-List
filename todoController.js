import {addTodo} from "./todoStore.js"
import {renderTodos} from "./todoView.js"
import {toggleTodo} from "./todoStore.js"
import {deleteTodo} from "./todoStore.js"

const form = document.querySelector(".inputContainer");
const textInput = document.querySelector(".textinput");
const taskList = document.querySelector(".taskList");


function addElement(event){
        event.preventDefault();
        const taskText = textInput.value;
        if(!taskText.trim()) return;

        renderTodos(taskText);
        addTodo(taskText);

        textInput.value = ""}

form.addEventListener("submit", addElement);

function toggleElement(event){
    const finishedButton = event.target;
    toggleTodo(finishedButton)
}

taskList.addEventListener("change", toggleElement);


function deleteElement(event){
    if(event.target.classList.contains("deleteButton")){
        deleteTodo(event.target.closest(".taskContainer"))
    }
}

taskList.addEventListener("click", deleteElement);