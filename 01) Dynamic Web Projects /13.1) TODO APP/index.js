let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];

function markit(checkboxId, labelId) {
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("linethrough");
}

function OnDelete(todoId) {
    let todoEl = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoEl);
}

function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo" + todo.uniqueNo;


    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.classList.add("checkbox-input");

    inputElement.onclick = function() {
        markit(checkboxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        OnDelete(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

function createTodo() {
    let UserInput = document.getElementById("todoUserInput");
    let InputValue = UserInput.value;

    let uniqueItemNO = todoList.length + 1;
    let todoItem = {
        text: InputValue,
        uniqueNo: uniqueItemNO
    };

    if (InputValue === "") {
        alert("Enter A Valid Input");
    } else {
        createAndAppendTodo(todoItem);
    }
    todoList.push(todoItem);
    UserInput.value = "";
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

let AddButtonElement = document.getElementById("addTodoButton");
AddButtonElement.onclick = function() {
    createTodo();
}
