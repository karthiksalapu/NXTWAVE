let TextInput = document.getElementById("msg");
let saveButton = document.getElementById("saveBtn");
let ClearButton = document.getElementById("clearBtn");

let SavedInput = localStorage.getItem("userInput");

if (SavedInput === null) {
    TextInput.textContent = "";
} else {
    TextInput.textContent = SavedInput;
}

saveButton.onclick = function() {
    let TextInputVal = TextInput.value;
    localStorage.setItem("userInput", TextInputVal);
};

ClearButton.onclick = function() {
    localStorage.removeItem("userInput");
};
