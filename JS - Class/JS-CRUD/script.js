let form = document.getElementById("addStudentForm");
let createBtn = document.getElementById("createBtn");
// localStorage.clear();

createBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let studentFirstName = document.getElementById("studentFirstName").value;
  let studentLastName = document.getElementById("studentLastName").value;
  let studentAge = document.getElementById("studentAge").value;
  let studentGender = document.getElementById("studentGender").value;
  let studentBirthday = document.getElementById("studentBirthday").value;
  let studentClass = document.getElementById("studentClass").value;

  let student = {
    firstName: studentFirstName,
    lastName: studentLastName,
    age: studentAge,
    gender: studentGender,
    birthday: studentBirthday,
    class: studentClass,
  };

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  form.reset();

  // Get the tbody element
  let tbody = document.querySelector("tbody");

  // Clear existing rows
  tbody.innerHTML = "";

  // Loop through the students and create table rows
  students.forEach(function (student) {
    let row = document.createElement("tr");
    row.innerHTML = `
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.age}</td>
                        <td>${student.gender}</td>
                        <td>${student.birthday}</td>
                        <td>${student.class}</td>
                        <td>${student.actions}</td>

                `;
    tbody.appendChild(row);
  });
});

let students = JSON.parse(localStorage.getItem("students")) || [];
students.push(student);
localStorage.setItem("students", JSON.stringify(students));

form.reset();

// Get the tbody element
let tbody = document.querySelector("tbody");

// Clear existing rows
tbody.innerHTML = "";

// Loop through the students and create table rows
students.forEach(function (student) {
  let row = document.createElement("tr");
  row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
            <td>${student.gender}</td>
            <td>${student.birthday}</td>
            <td>${student.class}</td>
        `;
  tbody.appendChild(row);
});
