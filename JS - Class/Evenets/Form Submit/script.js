let form = document.getElementById("formId");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let emailInput = document.getElementById("emailInput");
let phoneNumberInput = document.getElementById("phoneNumberInput");

const onSubmit = (e) => {
  e.preventDefault();
  console.log(e);
  const formData = new FormData(form);
  const formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });
  clearError();

  validateForm();
  console.log(formObject);
};

const validateForm = () => {
  let isValid = true;
  let nameValue = firstNameInput.value;
  let lastNameValue = lastNameInput.value;
  let emailValue = emailInput.value;

  if (!nameValue.trim() || nameValue.length < 2) {
    let nameError = document.getElementById("nameError");
    nameError.innerText = "name should be more than two length";
  }

  if (
    !lastNameValue.trim() ||
    lastNameValue.length < 2 ||
    lastNameValue.length > 6
  ) {
    let lastNameError = document.getElementById("lastNameError");
    lastNameError.innerText = "name should be more than two and less than 6";
    isValid = false;
  }

  if (!emailValue.includes("@")) {
    let emailError = document.getElementById("emailError");
    emailError.innerText = "email should have an @";
    isValid = false;
  }
  return isValid;
};

const clearError = () => {
  nameError.document.getElementById("nameError").innerText = "";
  lastNameError.document.getElementById("lastNameError").innerText = "";
  emailError.document.getElementById("emailError").innerText = "";
};

form.addEventListener("submit", onSubmit);
