function switchOn() {
    document.getElementById("switchoff").style.backgroundColor = "red";
    document.getElementById("switchon").style.backgroundColor = "grey";
    document.getElementById("text-switchon").textContent = "Switched ON";
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
}

function switchOff() {
    document.getElementById("switchon").style.backgroundColor = "green";
    document.getElementById("switchoff").style.backgroundColor = "grey";
    document.getElementById("text-switchon").textContent = "Switched OFF";
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
}
