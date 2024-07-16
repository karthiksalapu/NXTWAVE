let ButtonEl = document.getElementById("jokeBtn");
let JokeText = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");


function RandomJoke() {

    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"

    };
    let url = "https://apis.ccbp.in/jokes/random";
    spinnerEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {

            spinnerEl.classList.add("d-none");
            JokeText.textContent = JSON.stringify(jsondata);
        });
}
ButtonEl.onclick = function() {
    RandomJoke();
};
