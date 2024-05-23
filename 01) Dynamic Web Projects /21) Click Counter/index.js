let ButtonElement = document.getElementById("incrementBtn");
let SpanItem = document.getElementById("counterValue");

let ClickCount = localStorage.getItem("ClickCount");

if (ClickCount === null) {
    SpanItem.textContent = 0;
} else {
    SpanItem.textContent = ClickCount;
}

function UpdateCount() {
    let previousCount = SpanItem.textContent;
    let UpdatedCount = parseInt(previousCount) + 1;
    localStorage.setItem("clickCount", UpdatedCount);
    SpanItem.textContent = UpdatedCount;
}

ButtonElement.onclick = function() {
    UpdateCount();
}
