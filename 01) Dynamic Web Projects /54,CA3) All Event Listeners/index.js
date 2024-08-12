let DisplayText = document.getElementById("message");

function inlineEventListener() {
    DisplayText.textContent = "Inline event listener";
}

let ButtonEl = document.getElementById("onEventListenerBtn");

ButtonEl.onclick = function() {
    DisplayText.textContent = "onevent listener";
};

let AddEventButton = document.getElementById("addEventListenerBtn");

AddEventButton.addEventListener('click', function(event) {
    DisplayText.textContent = "addEventListener";
});
