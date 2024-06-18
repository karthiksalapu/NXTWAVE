let userInput = document.getElementById("themeUserInput");
let headingEl = document.getElementById("heading");
let containerEl = document.getElementById("bgContainer");

userInput.addEventListener("keyup", function(event) {
    let userInputVal = userInput.value;
    // here we can use nested conditions as shown in solution
    if (event.key === "Enter" && userInputVal === "Dark") {
        headingEl.style.color = "white";
        containerEl.classList.add("bg-dark-container");
    } else if (event.key === "Enter" && userInputVal === "Light") {
        headingEl.style.color = "#014d40";
        containerEl.classList.remove("bg-dark-container");
    } else if (event.key === "Enter" && (userInput !== "Light" || userInputVal !== "Dark")) {
        alert("Enter the valid theme");
    }

});
