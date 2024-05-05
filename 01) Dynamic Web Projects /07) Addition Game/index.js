let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

let checkDigit = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let congratsText = "Congratulations, You got it right!";

function resetAll() {
    let a = Math.ceil(Math.random() * 100);
    let b = Math.ceil(Math.random() * 100);
    firstNumber.textContent = a;
    secondNumber.textContent = b;
    checkDigit.textContent = "";
    gameResult.textContent = "";
}

function checkResult() {
    let checkResult = parseInt(checkDigit.value);
    let sumResult = parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent);

    if (checkResult === parseInt(sumResult)) {
        gameResult.textContent = congratsText;
        gameResult.style.backgroundColor = "#028a0f";
        gameResult.style.color = "white";
    } else {
        gameResult.textContent = "";
        gameResult.textContent = "Please Try Again!";
        gameResult.style.backgroundColor = "#1e217c";
        gameResult.style.color = "white";
    }
}

resetAll();
