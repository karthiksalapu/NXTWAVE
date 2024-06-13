let Paratext = document.getElementById("timerText");

let Button1 = document.getElementById("twentySecondsBtn");
let Button2 = document.getElementById("thirtySecondsBtn");
let Button3 = document.getElementById("fortySecondsBtn");
let Button4 = document.getElementById("oneMinuteBtn");



function twentySeconds() {
    let countdown = 20;
    Paratext.textContent = countdown + " Seconds left";
    let countID = setInterval(function() {
        countdown = countdown - 1;
        if (countdown === 0) {
            clearInterval(countID);
            Paratext.textContent = "Your moment is completed";
        }
    }, 1000);

}

function thirtySeconds() {
    let countdown = 30;
    Paratext.textContent = countdown + " Seconds left";
    Paratext.classList.add("ParaStyle");

    let countID1 = setInterval(function() {
        countdown = countdown - 1;
        if (countdown === 0) {
            clearInterval(countID1);
            Paratext.textContent = "Your moment is completed";
        }
    }, 1000);

}

function fortySeconds() {
    let countdown = 40;
    Paratext.textContent = countdown + " Seconds left";
    Paratext.classList.add("ParaStyle");
    let countID2 = setInterval(function() {
        countdown = countdown - 1;

        if (countdown === 0) {
            clearInterval(countID2);
            Paratext.textContent = "Your moment is completed";
        }
    }, 1000);

}

function oneminute() {
    let countdown = 60;
    Paratext.textContent = countdown + " Seconds left";
    Paratext.classList.add("ParaStyle");

    let countID3 = setInterval(function() {
        countdown = countdown - 1;

        if (countdown === 0) {
            clearInterval(countID3);
            Paratext.textContent = "Your moment is completed";
        }
    }, 1000);

}


Button1.onclick = function() {
    twentySeconds();
}

Button2.onclick = function() {
    thirtySeconds();
}

Button3.onclick = function() {
    fortySeconds();
}

Button4.onclick = function() {
    oneminute();
}
