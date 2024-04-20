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
  console.log(formObject);
};

form.addEventListener("submit", onSubmit);
