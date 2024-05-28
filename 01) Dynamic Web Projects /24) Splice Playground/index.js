let arr = [1, 7, 3, 1, 0, 20, 77];


let startIndex = document.getElementById("startIndexInput");
let deleteCount = document.getElementById("deleteCountInput");
let AddItems = document.getElementById("itemToAddInput");
let SpliceButton = document.getElementById("spliceBtn");
let UpdateArrayItems = document.getElementById("updatedArray");


SpliceButton.onclick = function() {
    let startIndexVal = startIndex.value;
    let deleteCountVal = deleteCount.value;
    let AddItemsVal = AddItems.value;

    if (startIndexVal === "") {
        alert("Please enter start Index");
    }

    if (deleteCountVal === "") {
        deleteCount = 0;
    }

    if (AddItemsVal === "") {
        arr.splice(parseInt(startIndexVal), parseInt(deleteCountVal));
    } else {
        arr.splice(parseInt(startIndexVal), parseInt(deleteCountVal), AddItemsVal);
    }
    startIndex.value = "";
    deleteCount.value = "";
    AddItems.value = "";
    let jsonitem = JSON.stringify(arr);
    UpdateArrayItems.textContent = jsonitem;
};
