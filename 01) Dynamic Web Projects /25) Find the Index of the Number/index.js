let numbers = [17, 31, 77, 20, 63];

let userInputEl = document.getElementById("userInput");
let indexOfNumberEl = document.getElementById("indexOfNumber");


function findIndexOfNumber() {
    let number = parseInt(userInputEl.value);
    let itemIndex = numbers.findIndex(function(eachItem) {
        if (eachItem === number) {
            return true;
        } else {
            return false;
        }
    });

    indexOfNumberEl.textContent = itemIndex;
}
