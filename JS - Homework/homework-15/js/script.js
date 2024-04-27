let registerForm = document.getElementById("registerForm");
let registerBtn = document.getElementById("registerBtn");
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmPassword");
let birthDateInput = document.getElementById("birthDate");

const registerUser = (e) => {
  e.preventDefault();

  clearForm();
  validateForm();
  const formData = new FormData(registerForm);
  const formObject = {};

  formData.forEach(function (value, key) {
    formObject[key] = value;
  });
  console.log(formObject);
};

const validateForm = () => {
  let isValid = true;
  let icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-triangle-exclamation");
  let firstNameError = document.getElementById("firstNameError");
  let lastNameError = document.getElementById("lastNameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let birthDateError = document.getElementById("birthDateError");

  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;
  let birthDate = birthDateInput.value;

  if (!(firstName.charAt(0) === firstName.charAt(0).toUpperCase()) == true) {
    console.log("Test");
    firstNameError.innerHTML = "First Name should start with uppercase letter";
    firstNameError.appendChild(icon);
    isValid = false;
  }

  if (!(lastName.charAt(0) === lastName.charAt(0).toUpperCase()) == true) {
    lastNameError.innerHTML = "Last Name should start with uppercase letter";
    lastNameError.appendChild(icon);
    isValid = false;
  }

  if (!(email.includes("@") && email.includes(".com"))) {
    console.log("test");
    emailError.innerHTML = "Email should have @ and .com";
    emailError.appendChild(icon);
    isValid = false;
  }

  if (!(password.length > 6 && password.length < 14)) {
    console.log("test");
    let ul = document.createElement("ul");
    ul.setAttribute("id", "passwordUl");
    let list = document.createElement("li");
    list.textContent = "Password must be greater then 6 and less than 14";

    ul.appendChild(list);
    passwordError.appendChild(ul);
    isValid = false;
  } else if (
    !(
      password.includes("@") ||
      password.includes("$") ||
      password.includes("!") ||
      password.includes("&")
    )
  ) {
    let ulist = document.getElementById("passwordUl");
    let listSecond = document.createElement("li");
    listSecond.textContent =
      "Password must contain on of those special character (@, $, !, &)";

    ulist.appendChild(listSecond);
  }

  if (
    !(
      password.includes("@") ||
      password.includes("$") ||
      password.includes("!") ||
      password.includes("&")
    )
  ) {
    let ulist = document.getElementById("passwordUl");
    let listSecond = document.createElement("li");
    listSecond.textContent =
      "Password must contain on of those special character (@, $, !, &)";

    ulist.appendChild(listSecond);
  }

  if (!(confirmPassword === password)) {
    confirmPasswordError.innerHTML = "Password should be matched";
    confirmPasswordError.appendChild(icon);
    isValid = false;
  }

  let age = "2006";

  let checkBirthDate = age.substring(0, 4);
  if (!(birthDate < checkBirthDate)) {
    birthDateError.innerHTML = "You must be 18 or older to create account";
    birthDateError.appendChild(icon);
    isValid = false;
  }

  if (!(formObject == "")) {
    alert("You should fill the form");
    isValid = false;
  }
  return isValid;
};

const clearForm = () => {
  let firstNameError = document.getElementById("firstNameError");
  firstNameError.innerText = "";
  let lastNameError = document.getElementById("lastNameError");
  lastNameError.innerText = "";
  let emailError = document.getElementById("emailError");
  emailError.innerText = "";
  let passwordError = document.getElementById("passwordError");
  passwordError.innerText = "";
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  confirmPasswordError.innerText = "";
  let birthDateError = document.getElementById("birthDateError");
  birthDateError.innerText = "";
};

registerBtn.addEventListener("click", registerUser);
