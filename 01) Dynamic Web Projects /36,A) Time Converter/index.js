let HourInput = document.getElementById("hoursInput");
let MinuteInput = document.getElementById("minutesInput");
let ButtonEl = document.getElementById("convertBtn");

let errorPara = document.getElementById("errorMsg");
let DisplayResultEl = document.getElementById("timeInSeconds");

ButtonEl.addEventListener("click", function() {
    let hoursVal = HourInput.value;
    let minutesVal = MinuteInput.value;

    if (hoursVal === "") {
        errorPara.textContent = "Please Enter Valid Number of Hours";
        errorPara.style.color = "white";
        return;
    } else if (minutesVal === "") {
        errorPara.textContent = "Please Enter Valid Number of Minutes";
        errorPara.style.color = "white";
        return;

    } else {
        let secondsVal = parseInt(hoursVal) * 3600 + parseInt(minutesVal) * 60;

        errorPara.textContent = "";
        DisplayResultEl.textContent = secondsVal + "s";
        DisplayResultEl.classList.add("DisplayStatus");
    }
});
