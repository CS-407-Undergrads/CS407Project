var firstName, lastName, pwd, usrname;

//saving input to declared variables
var saveInfo = function() {


  // empty array
  var savedData = [];
  //assigning variables to elements with specific ID name, will change when
  //proper ID name is declared
  firstName = document.getElementsByName("first_name");
  lastName = document.getElementsByName("last_name");
  emailadd = document.getElementsByName("email");
  usrname = document.getElementsByName("username");
  //checks if field is null, if not pushs into array at the end
  if(firstName != null){
    savedData.push(firstName);
  }
  if(lastName != null){
    savedData.push(lastName);
  }
  if(emailadd != null){
    savedData.push(emailadd);
  }
  if(usrname != null){
    savedData.push(usrname);
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
    alert(answer);
    location.reload();

    //setting savedData length to 0 erases contents of array
    savedData.length = 0;
  } else {
    answer = "Account creation still in progress, nothing erased";
    alert(answer);
  }

}
