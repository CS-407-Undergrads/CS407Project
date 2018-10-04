var firstName, lastName, pwd, usrname;

//saving input to declared variables
var saveInfo = function() {



  var savedData = [];
  //pushing input fields into js array
  savedData.push(firstName = document.getElementsByName("first_name")[0].value);
  savedData.push(lastName = document.getElementsByName("last_name")[0].value);
  savedData.push(emailadd = document.getElementsByName("email")[0].value);
  savedData.push(usrname = document.getElementsByName("username")[0].value);

  savedData.toString();
  //for testing
  alert(savedData);
}

//delete account information
var deleteData = function(){
  var answer;
  //confirmation box to make sure user wants to delete
  var response = confirm("Are you sure you want to delete?");
  // true = clicking ok/false vice versa
  if(response == true){
    answer = "deleted";
    alert(answer);
    //reloads page to clear input
    location.reload();

    //setting savedData length to 0 erases contents of array
    savedData.length = 0;

  } else {
    answer = "Account creation still in progress, nothing erased";
    alert(answer);
  }

}
