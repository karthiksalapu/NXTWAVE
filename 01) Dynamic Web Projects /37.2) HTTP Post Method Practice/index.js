let TextAreaInput = document.getElementById("requestBody");
let ButtonEl = document.getElementById("sendPostRequestBtn");
let StatusText = document.getElementById("requestStatus");
let ResponseText = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");


function reqAndRespond() {
    loadingEl.classList.remove("d-none");
    StatusText.classList.add("d-none");

    let dataInput = TextAreaInput.value;
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 7d97e27f1fc18a4aa24120f42c6bc25d0e3d59434bde21fd1169f20277014faf"
        },
        body: dataInput
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            loadingEl.classList.add("d-none");
            StatusText.classList.remove("d-none");

            StatusText.textContent = data.code;
            ResponseText.textContent = JSON.stringify(data);
        });
}


ButtonEl.onclick = function() {
    reqAndRespond();
};
