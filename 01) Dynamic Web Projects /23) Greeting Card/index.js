let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let localItem = JSON.parse(greeting);

let FromName = document.getElementById("para1");
let ToName = document.getElementById("para2");
let greetMessage = document.getElementById("para3");

FromName.textContent = "From: " + localItem.from;
ToName.textContent = "To: " + localItem.to;
greetMessage.textContent = localItem.greetText;
