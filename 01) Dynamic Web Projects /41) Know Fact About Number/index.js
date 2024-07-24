let spinnnerEl = document.getElementById("spinner");
let userInput = document.getElementById("userInput");
let factText = document.getElementById("fact");


function getFact(event) {

    if (event.key === "Enter") {

        let userInputValue = userInput.value;

        if (userInputValue === "") {
            alert("Enter a Number");
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputValue;

        let options = {
            method: "GET"
        };

        spinnnerEl.classList.remove("d-none");
        factText.classList.add("d-none");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    fact
                } = jsonData;
                spinnnerEl.classList.add("d-none");
                factText.classList.remove("d-none");
                factText.textContent = fact;
            });
    }
}

userInput.addEventListener("keydown", getFact);
