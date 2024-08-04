let ContainerEl = document.getElementById("speedTypingTest");
let spinnerEl = document.getElementById("spinner");

let TimerCount = document.getElementById("timer");
let QuoteText = document.getElementById("quoteDisplay");
let ResultText = document.getElementById("result");

let UserInput = document.getElementById("quoteInput");

let SubmitButton = document.getElementById("submitBtn");
let ResetButton = document.getElementById("resetBtn");

let countdown = 0;
let TextReceived = null;
let timerId = null;


function OnSubmit() {
    let Typedtext = UserInput.value;
    clearInterval(timerId);

    if (Typedtext === TextReceived) {
        ResultText.textContent = "You typed in " + countdown + ' seconds';
    } else {
        ResultText.textContent = "You Typed Incorrect sentence";

    }

}

SubmitButton.addEventListener("click", OnSubmit);

function pageRestart() {
    spinnerEl.classList.remove("d-none");
    ContainerEl.classList.add("d-none");

    let idVal = setInterval(function() {
        countdown = countdown + 1;
        TimerCount.textContent = countdown + " seconds";
    }, 1000);

    timerId = idVal;

    let url = "https://apis.ccbp.in/random-quote";

    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            ContainerEl.classList.remove("d-none");
            QuoteText.textContent = jsonData.content;
            TextReceived = jsonData.content;
        });

    countdown = 0;

}

setTimeout(pageRestart, 0);
ResetButton.addEventListener("click", pageRestart);
