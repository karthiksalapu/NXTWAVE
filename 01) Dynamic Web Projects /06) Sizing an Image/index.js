let imageElement = document.getElementById("image");

let originalImageWidth = "200px";
let warningMessageElement = document.getElementById("warningMessage");
let spanElement = document.getElementById("imageWidth");
let widthElement = 200;
let maximumSize = 300;
let minimumSize = 100;

let tooLargeWarn = "Too big. Decrease the size of Image.";
let tooSmallWarn = "Can't Visible. Increase the size of Image.";

imageElement.style.width = originalImageWidth;

function onIncrement() {
    if (widthElement >= 300) {
        warningMessageElement.textContent = tooLargeWarn;
    } else {
        imageElement.style.width = (widthElement + 5 + "px");
        widthElement = widthElement + 5;
        spanElement.textContent = widthElement + "px";
        warningMessageElement.textContent = "";
    }
}

function onDecrement() {

    if (widthElement <= 100) {
        warningMessageElement.textContent = tooSmallWarn;
    } else {
        imageElement.style.width = (widthElement - 5 + "px");
        widthElement = widthElement - 5;
        spanElement.textContent = widthElement + "px";
        warningMessageElement.textContent = "";
    }
}
