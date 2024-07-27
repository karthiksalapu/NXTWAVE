let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");
let formElement = document.getElementById("updatePasswordForm");
let ButtonElement = document.getElementById("updateBtn");

let newPswdErr = document.getElementById("newPasswordErrMsg");
let confirmPswdErr = document.getElementById("confirmPasswordErrMsg");

confirmPassword.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmPswdErr.textContent = "Required*";
        confirmPswdErr.classList.add("ErrMsg");
    } else {
        confirmPswdErr.textContent = "";
    }
});


newPassword.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        newPswdErr.textContent = "Required*";
        newPswdErr.classList.add("ErrMsg");
    } else {
        newPswdErr.textContent = "";
    }
});


formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    if (newPassword.value === "") {
        newPswdErr.textContent = "Required*";
        newPswdErr.classList.add("ErrMsg");
    } else {
        newPswdErr.textContent = "";
    }

    if (confirmPassword.value === "") {
        confirmPswdErr.textContent = "Required*";
        confirmPswdErr.classList.add("ErrMsg");
    } else {
        confirmPswdErr.textContent = "";
    }
})
