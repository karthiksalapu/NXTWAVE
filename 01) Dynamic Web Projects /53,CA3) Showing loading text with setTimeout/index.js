let ButtonEl = document.getElementById("button");

let text = "Loading...";

let countdown = 0;

function clearTimer(idVal){
    /*if (countdown === 1){
        clearTimeout(idVal);
        ButtonEl.textContent = "show Loading for 1 sec";
    }*/
    
    setTimeout(function(){
        ButtonEl.textContent = "show Loading for 1 sec";
    }, 1000);
}

ButtonEl.onclick = function(){
    let idVal = setTimeout(function(){
        ButtonEl.textContent = text;
        countdown = countdown + 1;
    }, 0);
    
    countdown = countdown + 1;
    clearTimer(idVal);
};
