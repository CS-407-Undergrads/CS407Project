var username = document.getElementById('username');
var currBal = document.getElementById('currbal');
var exBal = document.getElementById('exbal');
var submitBttn = document.getElementById('submit');

var currBals = {};
var exBals = {};

window.onload = function WindowLoad(event) {
        submitBttn.style.visibility = "hidden";
}

function checkTextFields() {
        submitBttn.style.visibility = (username.value == "" || currBal.value == "") ? "hidden" : "visible";
}
setInterval(checkTextFields, 10);

submitBttn.onclick = function() {
        currBals[username.value] = currBal.value;
        exBals[username.value] = exBal.value;
};
