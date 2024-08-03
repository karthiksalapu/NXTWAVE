// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let formElement = document.getElementById("bookmarkForm");
let NameInput = document.getElementById("siteNameInput");
let URLinput = document.getElementById("siteUrlInput");
let ButtonEl = document.getElementById("submitBtn");

let unorderList = document.getElementById("bookmarksList");

let NameErrMsg = document.getElementById("siteNameErrMsg");
let UrlErrMsg = document.getElementById("siteUrlErrMsg");

function AddBookMark() {
    let Name = NameInput.value;
    let url = URLinput.value;


    if (Name === "" && url === "") {
        NameErrMsg.textContent = "Required*";
        UrlErrMsg.textContent = "Required*";
    } else if (Name === "") {
        NameErrMsg.textContent = "Required*";
    } else if (url === "") {
        UrlErrMsg.textContent = "Required*";
    } else if (Name !== "" && url !== "") {
        NameErrMsg.textContent = "";
        UrlErrMsg.textContent = "";




        let ListItem = document.createElement("li");
        ListItem.classList.add("resultContainer");


        let siteName = document.createElement("h4");
        siteName.textContent = Name;
        ListItem.appendChild(siteName);

        let URLlink = document.createElement("a");
        URLlink.textContent = url;
        URLlink.href = url;
        URLlink.target = "_blank";
        ListItem.appendChild(URLlink);

        unorderList.appendChild(ListItem);

        NameInput.value = "";
        URLinput.value = "";
    }
}

NameInput.addEventListener("change", function() {
    if (NameInput.value === "") {
        NameErrMsg.textContent = "Required*";
    } else {
        NameErrMsg.textContent = "";
    }
});

URLinput.addEventListener("change", function() {
    if (URLinput.value === "") {
        UrlErrMsg.textContent = "Required*";
    } else {
        UrlErrMsg.textContent = "";
    }
});

ButtonEl.addEventListener("click", AddBookMark);

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
});
