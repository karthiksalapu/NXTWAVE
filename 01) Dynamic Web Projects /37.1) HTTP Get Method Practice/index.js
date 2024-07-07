let ButtonEl = document.getElementById("sendGetRequestBtn");
let statusTExt = document.getElementById("requestStatus");
let BodyText = document.getElementById("httpResponse");
let LoadingEl = document.getElementById("loading");


let url = "https://gorest.co.in/public-api/users";



ButtonEl.onclick = function httprequest() {
    let options = {
        method: "GET"
    };

    LoadingEl.classList.remove("d-none");
    statusTExt.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            statusTExt.classList.remove("d-none");
            LoadingEl.classList.add("d-none");

            statusTExt.textContent = data.code;
            BodyText.textContent = JSON.stringify(data);
        });

}
