function isEmpty(input) {
  return input.value.length === 0;
}


let warningMessage = document.querySelector(".warning");

let password = document.querySelector("#pwd");
let confirmPassword = document.querySelector("#confirm-pwd");

function checkValidPassword() {
  if (isEmpty(password)) {
    warningMessage.textContent = "*Password is empty";
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
  } else {
    if (password.value !== confirmPassword.value) {
      warningMessage.textContent = "*Passwords do not match";
      password.classList.remove("invalid");
    confirmPassword.classList.add("invalid");
    } else {
      warningMessage.textContent = "";
      password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    }
  }
}

password.addEventListener("change", checkValidPassword);
confirmPassword.addEventListener("change", checkValidPassword);