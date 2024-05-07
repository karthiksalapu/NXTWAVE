let AboutElement = document.getElementById("aboutButton");
let TimeToVisitElement = document.getElementById("timeToVisitButton");
let AttractionsElement = document.getElementById("attractionsButton");

let AboutTabContainer = document.getElementById("aboutTab");
let TimeToVisitTabContainer = document.getElementById("timeToVisitTab");
let AttractionsTabContainer = document.getElementById("attractionsTab");

TimeToVisitTabContainer.classList.add("d-none");
AttractionsTabContainer.classList.add("d-none");

function onAboutTab() {
    AboutTabContainer.classList.remove("d-none");
    TimeToVisitTabContainer.classList.add("d-none");
    AttractionsTabContainer.classList.add("d-none");

    TimeToVisitElement.style.backgroundColor = "#dae2ec";
    AttractionsElement.style.backgroundColor = "#dae2ec";
    AboutElement.style.backgroundColor = "white";

}

function onTimeToVisitTab() {
    AboutTabContainer.classList.add("d-none");
    TimeToVisitTabContainer.classList.remove("d-none");
    AttractionsTabContainer.classList.add("d-none");

    AttractionsElement.style.backgroundColor = "#dae2ec";
    AboutElement.style.backgroundColor = "#dae2ec";
    TimeToVisitElement.style.backgroundColor = "white";

}

function onAttractionsTab() {
    AboutTabContainer.classList.add("d-none");
    TimeToVisitTabContainer.classList.add("d-none");
    AttractionsTabContainer.classList.remove("d-none");

    AttractionsElement.style.backgroundColor = "white";
    AboutElement.style.backgroundColor = "#dae2ec";
    TimeToVisitElement.style.backgroundColor = "#dae2ec";
}
