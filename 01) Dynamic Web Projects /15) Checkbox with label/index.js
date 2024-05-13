let containerEl = document.getElementById("checkboxWithLabelContainer");

let checkboxEl = document.createElement("input");
checkboxEl.type = "checkbox";
checkboxEl.id = "checkbox";
containerEl.appendChild(checkboxEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Click Me!";
labelEl.id = "checkboxLabel";
labelEl.setAttribute("for", "checkbox");
containerEl.appendChild(labelEl);
