let FromUserInput = document.getElementById("fromUserInput");
let ToUserInput = document.getElementById("toUserInput");
let Paragraph = document.getElementById("counterText");
let ButtonEl = document.getElementById("startBtn");

function counter(UserinputValue, toCountValue) {
    let countdown = UserinputValue;
    Paragraph.textContent = countdown;

    let CounterId = setInterval(function() {
        if (countdown < toCountValue) {
            countdown += 1;
        } else {
            clearInterval(CounterId);
        }
    }, 1000);
}

ButtonEl.onclick = function() {
    let UserinputValue = FromUserInput.value;
    let toCountValue = ToUserInput.value;

    if (UserinputValue === "" || toCountValue === "") {
        alert("Enter Valid Input");
    } else {
        let IntfromVal = parseInt(UserinputValue);
        let InttoVal = parseInt(toCountValue);

        counter(IntfromVal, InttoVal);
    }



}
