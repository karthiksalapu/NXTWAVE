let inputEl = document.getElementById("input");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let storageKey = "userInput";

let storageVal = localStorage.getItem(storageKey);

if (storageVal === null) {
    localStorage.setItem(storageKey, "Hello");
}

inputEl.value = localStorage.getItem(storageKey);

saveBtnEl.onclick = function() {
    let inputVal = inputEl.value;
    localStorage.setItem(storageKey, inputVal);
};

clearBtnEl.onclick = function() {
    inputEl.value = "";
    localStorage.removeItem(storageKey);
};
