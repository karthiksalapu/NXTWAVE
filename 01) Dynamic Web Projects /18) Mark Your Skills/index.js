let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

function onToggle(labelEL) {
    labelEL.classList.toggle("toggle-style");
}

let ContainerElement = document.getElementById("skillsContainer");

let headingEl = document.createElement("h1");
headingEl.textContent = "Mark Your Skills";
headingEl.classList.add("heading-text");
ContainerElement.appendChild(headingEl);

let unlistedItem = document.createElement("ul");
unlistedItem.classList.add("unorder-list-style");
ContainerElement.appendChild(unlistedItem);

function CreateAndAppendToDo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    let listItem = document.createElement("li");
    unlistedItem.appendChild(listItem);

    let InputEl = document.createElement("input");
    InputEl.type = "checkbox";
    InputEl.id = checkboxId;


    listItem.appendChild(InputEl);

    let labelEL = document.createElement("label");
    labelEL.textContent = todo.skillName;
    console.log(todo.skillName);
    labelEL.id = labelId;
    labelEL.classList.add("skill-style");
    labelEL.setAttribute("for", checkboxId);
    listItem.appendChild(labelEL);

    InputEl.onclick = function() {
        onToggle(labelEL);
    };

}



for (let todo of skillList) {
    CreateAndAppendToDo(todo);
}
