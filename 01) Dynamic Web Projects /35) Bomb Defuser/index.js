let userInput = document.getElementById("defuser");
let paraText = document.getElementById("timer");

let countdown = 10
let timerId = setInterval(function() {
    countdown = countdown - 1;
    paraText.textContent = countdown;
    if (countdown === 0) {
        clearInterval(timerId);
        paraText.textContent = "BOOM";
    }

}, 1000);

userInput.addEventListener("keydown", function(event) {
    let userInputVal = userInput.value;
    if (event.key === "Enter" && userInputVal === "defuse" && countdown !== 0) {
        clearInterval(timerId);
        paraText.textContent = "You did it!";
    }
});
