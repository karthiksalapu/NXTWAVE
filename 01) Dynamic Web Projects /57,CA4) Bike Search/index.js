let UserInput = document.getElementById("searchInput");
let resultContainer = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndUpdate(item) {
    let {
        city,
        name
    } = item;

    let DivItem = document.createElement("div");
    DivItem.classList.add("resultsContainer");
    resultContainer.appendChild(DivItem);

    let bikeName = document.createElement("p");
    bikeName.textContent = "Bike Name: " + name;
    DivItem.appendChild(bikeName);
    let Country = document.createElement("p");
    Country.textContent = "City: " + city;
    DivItem.appendChild(Country);
}



function searchResults(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        let userInputVal = UserInput.value;
        let options = {
            method: "GET"
        };
        let url = "https://apis.ccbp.in/city-bikes?bike_name=" + userInputVal;


        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none");
                console.log(jsonData);

                for (let items of jsonData) {
                    createAndUpdate(items);
                }
            });
    }
}

UserInput.addEventListener('keydown', searchResults);
