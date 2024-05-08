let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let titleText = document.getElementById("titletext");
titleText.textContent = recipeObj.title;

let imageElement = document.getElementById("imageitem");
imageElement.src = recipeObj.imgSrc;

let myArray = recipeObj.ingredients;
let UnlistItems = document.getElementById("itemList");
for (let arrObj of myArray) {
    let listItem = document.createElement("li");
    listItem.classList.add("ingredients");
    listItem.textContent = arrObj;
    UnlistItems.appendChild(listItem);
}
