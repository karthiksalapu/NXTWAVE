let formElement = document.getElementById("consoleForm");

let RequestUrl = document.getElementById("requestUrl");
let ResponseStatusText = document.getElementById("responseStatus");

let RequestMethod = document.getElementById("requestMethod");

let RequestBody = document.getElementById("requestBody");
let ResponseBodyText = document.getElementById("responseBody");

let ErrorMsgtext = document.getElementById("requestUrlErrMsg");

let formdata = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};

RequestUrl.addEventListener("change", function(event) {
    formdata.requestUrl = event.target.value;
});

RequestMethod.addEventListener("change", function(event) {
    formdata.requestMethod = event.target.value;
});

RequestBody.addEventListener("change", function(event) {
    formdata.requestBody = event.target.value;
});

function validateRequest(formdata) {
    let {
        requestUrl
    } = formdata;
    if (requestUrl === "") {
        ErrorMsgtext.textContent = "Required*";

    } else {
        ErrorMsgtext.textContent = "";
    }
}

RequestUrl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        ErrorMsgtext.textContent = "Required*";
    }
})

function PostOrPut(formdata) {
    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formdata;

    let options = {
        method: requestMethod,
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 7d97e27f1fc18a4aa24120f42c6bc25d0e3d59434bde21fd1169f20277014faf"

        },
        body: requestBody
    };

    //options.method = RequestMethod.value;
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let responseStatus = jsonData.code;
            let BodyText = JSON.stringify(jsonData);
            ResponseStatusText.value = responseStatus;
            ResponseBodyText.value = BodyText;
        });
}


formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    PostOrPut(formdata);
    validateRequest(formdata);
});
