let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainer = document.getElementById("profileContainer");
profileContainer.classList.add("d-flex", "flex-column");
let ImgContainer = document.getElementById("imgContainer");
ImgContainer.classList.add("img-Container");

let ImageElement = document.createElement("img");
ImageElement.src = profileDetails.imgSrc;
ImageElement.classList.add("Image-style");
ImgContainer.appendChild(ImageElement);

let NameElement = document.createElement("h1");
NameElement.textContent = profileDetails.name;
NameElement.classList.add("text-style");
profileContainer.appendChild(NameElement);

let AgeElement = document.createElement("h1");
AgeElement.textContent = "AGE : " + profileDetails.age;
AgeElement.classList.add("text-style");
profileContainer.appendChild(AgeElement);
