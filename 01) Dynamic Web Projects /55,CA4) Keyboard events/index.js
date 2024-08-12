let UserInput = document.getElementById("userInput");
let spanItem = document.getElementById("keydownCounter");
let KeyCode = document.getElementById("keydownCode");

let count = 0;


UserInput.addEventListener("keydown", function UpdateValue(event) {
    let result = event.keyCode;
    count = count + 1;

    spanItem.textContent = count;
    KeyCode.textContent = result;

});
