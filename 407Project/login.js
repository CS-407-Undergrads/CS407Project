var dummyUsers = [{
  username: "bob",
  password: "abc"
}, {
  username: "joe",
  password: "coffee"
}];


function getInfo() {
  var name = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

for(i=0;i<dummyUsers.length;i++)
{
  if(pass!=dummyUsers[0].password)
  {
    alert("incorrect password");
  }else {
    window.location.href="bobaccount.html";
  }

}


}
