let countries = {
    paris: "France",
    london: "United Kingdom",
    newYork: "USA",
    newDelhi: "India"
};

let resultItem = document.getElementById("resultId");

let SelctionList = document.getElementById("selectId");


function Capitals(event) {
    let Answer = event.target.value;
    resultItem.textContent = countries[Answer];
}

SelctionList.addEventListener("change", Capitals);
