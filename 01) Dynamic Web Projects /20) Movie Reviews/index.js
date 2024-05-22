let ButtonEl = document.getElementById("addBtn");
let reviewContainer = document.getElementById("reviewsContainer");

let titleInput = document.getElementById("titleInput");
let reviewInput = document.getElementById("reviewTextarea");

function createReview() {
    let titleInputValue = titleInput.value;
    let reviewInputValue = reviewInput.value;

    let MovieTitle = document.createElement("h1");
    let MOviewReview = document.createElement("p");

    if (titleInputValue === "" || reviewInputValue === "") {
        alert("Kindly Provide Input");
        return;
    }
    MovieTitle.textContent = "Movie Title: " + titleInputValue;
    MOviewReview.textContent = "Review: " + reviewInputValue;
    MovieTitle.classList.add("review-style");
    MOviewReview.style.color = "black";
    reviewContainer.appendChild(MovieTitle);
    reviewContainer.appendChild(MOviewReview);

    titleInput.value = "";
    reviewInput.value = "";

}

ButtonEl.onclick = function() {
    createReview();
}
