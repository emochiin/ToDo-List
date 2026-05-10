const todoArray = []

export function addTodo(task){
    todoArray.push(task)
}

export function toggleTodo(checkbox) {
    const span = checkbox.nextElementSibling;
    span.classList.toggle("finished", checkbox.checked);
}

export function deleteTodo(id){
    id.closest(".taskContainer").remove();
}

export function getTodos(){
    return todoArray;
}