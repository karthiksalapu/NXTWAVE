let userInput = document.getElementById("userInput");
let UllistItems = document.getElementById("keyCodeList");


userInput.addEventListener("keydown", function(event) {
    let listItem = document.createElement("li");
    listItem.textContent = event.keyCode;
    UllistItems.appendChild(listItem);
});
