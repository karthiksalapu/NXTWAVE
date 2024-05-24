let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let ContainerEL = document.getElementById("jsonContainer");

function convert(item) {
    let JsonString = JSON.stringify(item);
    let DivItem = document.createElement("div");
    DivItem.classList.add("json-text");
    ContainerEL.appendChild(DivItem);

    let ParaText = document.createElement("p");
    ParaText.textContent = JsonString;
    DivItem.appendChild(ParaText);
}

convert(bikes);
convert(person);
convert(todos);
