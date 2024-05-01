let stopColourElement = document.getElementById("stopButton");
let readyColourElement = document.getElementById("readyButton");
let goColourElement = document.getElementById("goButton");

let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");

function stop() {
    stopColourElement.style.backgroundColor = "#cf1124";
    stopLightElement.style.backgroundColor = "#cf1124";

    goColourElement.style.backgroundColor = "#1f1d41";
    goLightElement.style.backgroundColor = "#4b5069";

    readyColourElement.style.backgroundColor = "#1f1d41";
    readyLightElement.style.backgroundColor = "#4b5069";
}

function ready() {
    readyColourElement.style.backgroundColor = "#f7c948";
    readyLightElement.style.backgroundColor = "#f7c948";

    goColourElement.style.backgroundColor = "#1f1d41";
    goLightElement.style.backgroundColor = "#4b5069";

    stopColourElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#4b5069";
}

function Go() {
    goColourElement.style.backgroundColor = "#199473";
    goLightElement.style.backgroundColor = "#199473";

    readyColourElement.style.backgroundColor = "#1f1d41";
    readyLightElement.style.backgroundColor = "#4b5069";

    stopColourElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#4b5069";
}
