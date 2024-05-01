let textChange = document.getElementById("selectedColorHexCode").textContent;
let containerColour = document.getElementById("colorPickerContainer").textContent;

function Button1() {
    containerColour = document.getElementById("colorPickerContainer").style.backgroundColor = "#e0e0e0";
    textChange = document.getElementById("selectedColorHexCode").textContent = "#e0e0e0";
}

function Button2() {
    containerColour = document.getElementById("colorPickerContainer").style.backgroundColor = "#6fcf97";
    textChange = document.getElementById("selectedColorHexCode").textContent = "#6fcf97";
}

function Button3() {
    containerColour = document.getElementById("colorPickerContainer").style.backgroundColor = "#56ccf2";
    textChange = document.getElementById("selectedColorHexCode").textContent = "#56ccf2";
}

function Button4() {
    containerColour = document.getElementById("colorPickerContainer").style.backgroundColor = "#bb6bd9";
    textChange = document.getElementById("selectedColorHexCode").textContent = "#bb6bd9";
}
