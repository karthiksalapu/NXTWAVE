let puppyImage = document.getElementById("puppyImage");
let buttonElement = document.getElementById("likeButton");
let buttonIcon = document.getElementById("likeIcon");

let imageLiked = false;

function onClickLikeButton() {
    if (imageLiked === false) {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        buttonElement.style.backgroundColor = "#0967d2";
        buttonElement.style.color = "white";
        buttonIcon.style.color = "#0967d2";
        imageLiked = true;
    } else {
        puppyImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        buttonElement.style.backgroundColor = "#cbd2d9";
        buttonElement.style.color = "#9aa5b1";
        buttonIcon.style.color = "#cbd2d9";
        imageLiked = false;
    }
}
