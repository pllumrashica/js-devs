let employeeForm = document.getElementById("employeeId");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let ageInput = document.getElementById("ageInput");
let employyes = [];

const createElmployee = (e) => {
  e.preventDefault();

  const formData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
  };

  formData.id = employyes.length + 1;

  employyes.push(formData);
  console.log(employyes);
};

employeeForm.addEventListener("submit", createElmployee);
