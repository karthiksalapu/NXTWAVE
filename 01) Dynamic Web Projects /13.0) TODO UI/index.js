/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

let unlistedItems = document.getElementById("todoItemsContainer");

function AppendAndUpdate(todotext) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    unlistedItems.appendChild(todoElement);

    let checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.id = "CheckBoxid";
    checkboxEl.classList.add("checkbox-input");
    todoElement.appendChild(checkboxEl);

    let labeldiv = document.createElement("div");
    labeldiv.classList.add("d-flex", "flex-row", "label-container");
    todoElement.appendChild(labeldiv);

    let labelEl = document.createElement("label");
    labelEl.id = "labelElid";
    labelEl.textContent = todotext;
    labelEl.classList.add("checkbox-label");
    labelEl.setAttribute("for", "CheckBoxid");
    labeldiv.appendChild(labelEl);

    let DeleteIconContainer = document.createElement("div");
    DeleteIconContainer.classList.add("delete-icon-container");
    labeldiv.appendChild(DeleteIconContainer);

    let DeleteIcon = document.createElement("i");
    DeleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    DeleteIconContainer.appendChild(DeleteIcon);
}


for (let arr of todoList) {
    AppendAndUpdate(arr.text);
}
