function validateName() {
  let name = document.getElementById("name")
  let nameWarning = document.getElementById("nameWarning")

  let check = /^([a-zA-Z]+) ?([a-zA-Z]+)? ?([a-zA-Z]+)?$/

  if(!name.value.match(check)) {
    nameWarning.innerHTML = "Name is not in correct format!"
  } else {
    nameWarning.innerHTML = ""
  }
  
  
}

function validateNumber() {
  let number = document.getElementById("number")
  let numberWarning = document.getElementById("numberWarning")

  let check = /^\d{10}$/

  if(!number.value.match(check)) {
    numberWarning.innerHTML = "Number is not in correct format!"
  } else {
    numberWarning.innerHTML = ""
  }

  
}

function validateEmail() {
  let email = document.getElementById("email")
  let emailWarning = document.getElementById("emailWarning")

  let check = /^([0-9A-Za-z\.\_]+)@([a-zA-Z]+).([a-zA-Z]+)$/

  if(!email.value.match(check)) {
    emailWarning.innerHTML = "Email is not in correct format!"
  } else {
    emailWarning.innerHTML = ""
  }

  
}