let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let containerElement = document.getElementById("bgContainer");

function colorChange() {
    let changeValue = Math.ceil(Math.random() * (bgColorsArray.length));
    let colorItem = bgColorsArray[changeValue];
    containerElement.style.backgroundColor = colorItem;
}
