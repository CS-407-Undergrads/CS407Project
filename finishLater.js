var firstName, lastName, pwd;

//saving input to declared variables
var saveInfo = function() {
  // empty array
  var savedData = [];
  //assigning variables to elements with specific ID name, will change when
  //proper ID name is declared
  firstName = document.getElementById("firstName");
  lastName = document.getElementById("lastName");
  pwd = document.getElementById("password");
  //checks if field is null, if not pushs into array at the end
  if(firstName != null){
    savedData.push(firstName);
  }
  if(lastName != null){
    savedData.push(lastName);
  }
  if(pwd != null){
    savedData.push(pwd);
  }

  // find all elements with tag name input and assign them all to ""
  var elements = document.getElementByTagName("input");
  for(var i = 0; i <elements.length; i++){
    if(elements[i].type == "text"){
      elements[i].value = ""
    }
  }
}

//delete account information
var deleteData = function(){
  var answer;
  //confirmation box to make sure user wants to delete
  var response = confirm("Are you sure you want to delete?");
  if(response == true){
    answer = "deleted";
    //setting savedData length to 0 erases contents of array
    savedData.length = 0;
  } else {
    answer = "Account creation still in progress, nothing erased";
  }

}
