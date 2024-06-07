let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let containerEl = document.getElementById("chatContainer");
let InputEl = document.getElementById("userInput");

let sendMsgItem = document.getElementById("sendMsgBtn");

function chatBotMessage() {
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    containerEl.appendChild(msgContainerEl);

    let chatBotText = document.createElement("span");
    let indexval = Math.ceil(Math.random() * chatbotMsgList.length) - 1;
    console.log(indexval);
    let message = chatbotMsgList[indexval];
    console.log(message);
    chatBotText.textContent = message;
    chatBotText.classList.add("msg-from-chatbot");

    msgContainerEl.appendChild(chatBotText);
}

sendMsgItem.onclick = function text() {
    let userInputVal = InputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    containerEl.appendChild(msgContainerEl);

    let appendItem = document.createElement("span");
    appendItem.textContent = userInputVal;
    appendItem.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(appendItem);

    InputEl.value = "";

    chatBotMessage();
}
