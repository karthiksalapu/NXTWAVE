let billValue = document.getElementById("billAmount");
let tipValue = document.getElementById("percentageTip");

let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");

let errorElement = document.getElementById("errorMessage");
let errorMessageElement = "Please Enter a Valid Input.";

function calculateTip() {
    let billAmount = billValue.value;
    let percentageTip = tipValue.value;

    if (billAmount === "") {
        errorElement.textContent = errorMessageElement;
    } else if (percentageTip === "") {
        errorElement.textContent = errorMessageElement;
    } else {
        let billValue = parseInt(billAmount);
        let tipValue = parseInt(percentageTip);
        let calculatedTip = billValue * (percentageTip / 100);
        let calculatedTotal = billValue + calculatedTip;
        tipAmount.value = calculatedTip;
        totalAmount.value = calculatedTotal;
        errorElement.textContent = "";
    }
}
