let myFormEl = document.getElementById("addUserForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
        nameErrMsgEl.classList.add("errtext");
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
        emailErrMsgEl.classList.add("errtext");

    } else {
        emailErrMsgEl.textContent = "";
    }
});

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});
