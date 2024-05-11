let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let backgroundContainer = document.getElementById("groceryListContainer");
backgroundContainer.classList.add("bg-container");

let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("heading-text");
backgroundContainer.appendChild(headingEl);

let groceryContainer = document.createElement("div");
groceryContainer.classList.add("grocery-container");
backgroundContainer.appendChild(groceryContainer);

let unOrderItems = document.createElement("ul");
groceryContainer.appendChild(unOrderItems);

function addItems(arrval) {
    let groceryItem = document.createElement("li");
    groceryItem.classList.add("grocery-text");
    groceryItem.textContent = arrval;
    unOrderItems.appendChild(groceryItem);
}

for (let arrval of groceryList) {
    addItems(arrval);
}
