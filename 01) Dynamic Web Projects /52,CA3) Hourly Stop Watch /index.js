let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");

let minutexText = document.getElementById("minutes");
let secondsText = document.getElementById("seconds");


let countdown = 0;
let minuteCount = 0;

function CountingText() {

    let counterId = setInterval(function() {
        countdown = countdown + 1;
        if (countdown < 10){
           secondsText.textContent = "0" + countdown; 
        }
        else{
            secondsText.textContent = countdown;
        };
        
        
        if (countdown === 60) {
            minuteCount = minuteCount + 1;
            minutexText.textContent = minuteCount;
            countdown = 0;
        }

        if (minuteCount === 60) {
            minuteCount = 0;
            countdown = 0;
            minutexText.textContent = minuteCount;
            secondsText.textContent = countdown;
        }
    }, 1000);

    stopBtn.onclick = function() {
        clearInterval(counterId);
    };
}


startBtn.addEventListener("click", CountingText);
