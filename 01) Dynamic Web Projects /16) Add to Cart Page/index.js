let ContainerElement = document.getElementById("containerEL");
let ButtonElement = document.getElementById("addBtn");
let inputElement = document.getElementById("cartItemTextInput");
let unorderList = document.getElementById("cartitemsContainer");

ButtonElement.onclick = function() {
    let inputValue = inputElement.value;
    let listItem = document.createElement("li");
    listItem.textContent = inputValue;
    listItem.classList.add("listStyle");
    unorderList.appendChild(listItem);
}
