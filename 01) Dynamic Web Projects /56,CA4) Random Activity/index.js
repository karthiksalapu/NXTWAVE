let buttonEl = document.getElementById("getActivityBtn");
let spinnerEl = document.getElementById("spinner");

let ImgEl = document.getElementById("activityImg");
let ActivityName = document.getElementById("activityName");
let ActivityType = document.getElementById("activityType");

let options = {
    method: "GET"
};

let url = "https://apis.ccbp.in/random-activity";

function eventChange() {
    spinnerEl.classList.remove("d-none");
    ImgEl.classList.add("d-none");
    ActivityName.classList.add("d-none");
    ActivityType.classList.add("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            ImgEl.classList.remove("d-none");
            ActivityName.classList.remove("d-none");
            ActivityType.classList.remove("d-none");
            console.log(jsonData);
            ImgEl.src = jsonData.image;
            ActivityName.textContent = jsonData.activity;
            console.log(jsonData.activity);
            ActivityType.textContent = jsonData.type;
            console.log(jsonData.type);
        });

}

buttonEl.addEventListener("click", function(event) {
    event.preventDefault();
    eventChange();
});
