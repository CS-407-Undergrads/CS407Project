function checkTextFields() {
        document.getElementById('submit').disabled = (name === "" || pass === "") ? true : false;
}
checkTextFields();
setInterval(checkTextFields, 1);
