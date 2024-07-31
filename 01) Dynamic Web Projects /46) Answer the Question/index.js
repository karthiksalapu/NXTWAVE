let formEl = document.getElementById("questionsForm");
let ButtonEl = document.getElementById("submitBtn");
let ResultMsg = document.getElementById("resultMsg");

let Opt1 = document.getElementById("cityHyderabad");
let Opt2 = document.getElementById("cityChennai");
let Opt3 = document.getElementById("cityDelhi");
let Opt4 = document.getElementById("cityMumbai");

let Answer = "delhi";
let OptionChoosen = null;

Opt1.addEventListener("change", function(event) {
    OptionChoosen = event.target.value;
});

Opt2.addEventListener("change", function(event) {
    OptionChoosen = event.target.value;
});

Opt3.addEventListener("change", function(event) {
    OptionChoosen = event.target.value;
});


Opt4.addEventListener("change", function(event) {
    OptionChoosen = event.target.value;
});

formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (OptionChoosen === null) {
        ResultMsg.textContent = "Please Select the Answer";
    } else if (OptionChoosen === Opt3.value) {
        ResultMsg.textContent = "Correct Answer!";
        ResultMsg.classList.add("paraMsg");
    } else {
        ResultMsg.textContent = "Wrong Answer!";
        ResultMsg.classList.remove("paraMsg");
    }
});
