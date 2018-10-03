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

var 
