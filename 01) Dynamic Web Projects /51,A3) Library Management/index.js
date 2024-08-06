let userInput = document.getElementById("searchInput");
let resultContainer = document.getElementById("searchResults");

let spinnerEl = document.getElementById("spinner");
let heading = document.getElementById("titleText");

function BooksList(items) {
    let {
        author,
        imageLink,
        title
    } = items;


}

function createAndAppend(item) {
    let {
        author,
        imageLink,
        title
    } = item;

    //resultContainer.classList.add("d-none");

    let BookEl = document.createElement("div");
    BookEl.classList.add("col-6", "d-flex", "flex-row");
    resultContainer.appendChild(BookEl);


    let BookImg = document.createElement("img");
    BookImg.src = imageLink;
    BookImg.classList.add("w-80");
    BookEl.appendChild(BookImg);

    let BookAuthor = document.createElement("p");
    BookAuthor.textContent = author;
    BookEl.appendChild(BookAuthor);
}

/*function fetchBooks() {
    let url = "https://apis.ccbp.in/book-store";

    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            let {
                search_results
            } = jsonData;
            for (let item of search_results) {
                createAndAppend(item);
                BooksList(item);
            }
        });
}*/

function searchForBooks() {
    let parameter = userInput.value;
    let url = "https://apis.ccbp.in/book-store?title=" + parameter;

    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            let {
                search_results
            } = jsonData;
            for (let item of search_results) {
                createAndAppend(item);
            }
        });

    heading.textContent = "Popular Books";
}

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchForBooks();
    }


});
//fetchBooks();
