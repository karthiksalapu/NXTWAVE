let ContainerEl = document.getElementById("checkBoxWithLabelContainer");

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "checkbox";
ContainerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.id = "checkboxLabel";
labelEl.textContent = "I am a label";
labelEl.setAttribute("for", "checkbox");
ContainerEl.appendChild(labelEl);

function clickOn() {
    labelEl.classList.toggle("toggle-style");
}

checkboxEl.onclick = function() {
    clickOn();
}
