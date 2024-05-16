let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

let containerEl = document.getElementById("orderedItemsContainer");
containerEl.classList.add("p-3");

let unorderlist = document.getElementById("unorderlist");


function createAndAppendItem(items) {
    let listId = "item" + items.uniqueNo;
    let ButtonId = "button" + items.uniqueNo;
    let listItem = document.createElement("li");
    listItem.textContent = items.itemName;
    listItem.classList.add("unlisted-items");
    listItem.id = listId;
    unorderlist.appendChild(listItem);

    let ButtonELement = document.createElement("button");
    ButtonELement.textContent = "Cancel";
    ButtonELement.classList.add("button-style");
    ButtonELement.id = ButtonId;

    ButtonELement.onclick = function() {
        unorderlist.removeChild(listItem);
    };
    listItem.appendChild(ButtonELement);
}



for (let items of itemList) {
    createAndAppendItem(items);
}
