let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let containerEl = document.getElementById("wordsContainer");
let UserInput = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let ButtonEl = document.getElementById("addBtn");



for (let items of wordCloud) {
    let fontsize = Math.ceil(Math.random() * 40);
    let appendItem = document.createElement("span");
    appendItem.textContent = items;
    appendItem.style.fontSize = fontsize + "px";
    appendItem.style.fontFamily = "Roboto";
    appendItem.style.margin = "10px";
    containerEl.appendChild(appendItem);
}

ButtonEl.onclick = function() {
    let UserInputVal = UserInput.value;

    if (UserInputVal === "") {
        errorMsgEl.textContent = "Please enter a word";
        errorMsgEl.classList.add("error-msg");
        return;
    }

    let fontsize = Math.ceil(Math.random() * 50);
    let appendItem = document.createElement("span");
    appendItem.textContent = UserInputVal;
    appendItem.style.fontSize = fontsize + "px";
    appendItem.style.fontFamily = "Roboto";
    appendItem.style.margin = "10px";
    containerEl.appendChild(appendItem);
}
