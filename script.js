var submit = document.getElementById("submit");

submit.addEventListener("click", function (e) {
  console.log("clicked");
  console.log(e);

var errors = 0;

  
var lettersSpaces = new RegExp("^[A-Za-z\\s]*$");
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var phonePattern = /^[0-9]{10,15}$/;


  var name = document.getElementById("name");
  var nameError = document.getElementById("name-error");
  if (!name.value) {
    nameError.innerHTML = "Please provide your name";
    errors++;
  } else if (!lettersSpaces.test(name.value)) {
    nameError.innerHTML = "Please provide a valid name";
    errors++;
  } else {
    nameError.innerHTML = "";
  }


  var email = document.getElementById("email");
  var emailError = document.getElementById("email-error");
  if (!email.value) {
    emailError.innerHTML = "Please provide your email";
    errors++;
  } else if (!emailPattern.test(email.value)) {
    emailError.innerHTML = "Please provide a valid email address";
    errors++;
  } else {
    emailError.innerHTML = "";
  }


  var phone = document.getElementById("phone");
  var phoneError = document.getElementById("phone-error");
  if (!phone.value) {
    phoneError.innerHTML = "Please provide your phone number";
    errors++;
  } else if (!phonePattern.test(phone.value)) {
    phoneError.innerHTML = "Please provide a valid phone number";
    errors++;
  } else {
    phoneError.innerHTML = "";
  }

  
  var messageField = document.getElementById("message");
  var messageError = document.getElementById("message-error");
  if (!messageField.value) {
    messageError.innerHTML = "Please enter your message";
    errors++;
  } else {
    messageError.innerHTML = "";
  }

  
  if (errors == 0) {
    var message = document.getElementById("message-box");
    message.innerHTML = "Thank you!";
    name.value = "";
    email.value = "";
    phone.value = "";
    messageField.value = "";
  }

  
  e.preventDefault();
});