let employeeForm = document.getElementById("employeeId");
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let ageInput = document.getElementById("ageInput");
const savedEmployees = JSON.parse(localStorage.getItem("employees"));
const initialEmployees = savedEmployees || [];
let employyes = initialEmployees;
let container = document.getElementById("container");

const savedEmployeesLocalStrogae = () => {
  localStorage.setItem("employees", JSON.stringify(employyes));
};



const renderEmployees = (e) => {
  container.innerHTML = "";
  let table = document.createElement("table");
  table.innerHTML = `
  <thead>
  <tr>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Age</th>
  </tr>
  </thead>
  `;

  let tableBody = document.createElement("tbody");
  employyes.forEach((employee) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.age}</td>
    `;
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  container.appendChild(table);
};

const createElmployee = (e) => {
  e.preventDefault();

  const formData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
  };

  formData.id = employyes.length + 1;

  employyes.push(formData);
  renderEmployees();
  savedEmployeesLocalStrogae();
  console.log(employyes);
  employeeForm.reset();
};

employeeForm.addEventListener("submit", createElmployee);
renderEmployees();

// localStorage.setItem("username", "Pllumi");
// let getItems = localStorage.getItem("username");
// console.log(getItems);
// // localStorage.clear();
