let form = document.getElementById("studentStats");
let studentsTable = document.getElementById("studentsTable");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let school = document.getElementById("school");
let birthDay = document.getElementById("birthDay");
let hobbies = document.getElementById("hobbies");
let addHobbyBtn = document.getElementById("addHobby");
let hobbiesRow = document.getElementById("hobbiesRow");
let street = document.getElementById("street");
let houseNumber = document.getElementById("houseNumber");
let city = document.getElementById("city");
let zipCode = document.getElementById("zipCode");
let comment = document.getElementById("comment");

const savedStudent = JSON.parse(localStorage.getItem("studentStats"));
const initialStudent = savedStudent || [];
let students = initialStudent;

const savedStudentsLocalStrogae = () => {
  localStorage.setItem("studentStats", JSON.stringify(students));
};

const renderStudents = (e) => {
  studentsTable.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.setAttribute("class", "studentsHeader");
  h1.innerText = "Students";
  studentsTable.appendChild(h1);
  let table = document.createElement("table");
  table.setAttribute("class", "studentsTable");
  table.innerHTML = `
  <thead>
  <tr>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Age</th>
  <th>School</th>
  <th>Birthday</th>
  <th>Hobbies</th>
  <th>Address</th>
  <th>Comment</th>
  </tr>
  </thead>
  `;

  let tableBody = document.createElement("tbody");

  students.forEach((student) => {
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.age}</td>
    <td>${student.school}</td>
    <td>${student.birthDay}</td>
    <td>${student.hobbies.join(", ")}</td>
    <td>${student.address.street} ${student.address.houseNumber}, ${
      student.address.city
    }, ${student.address.zipCode}</td>
    <td>${student.comment}</td>
    `;

    tableBody.appendChild(row);
  });
  const hobbiesArray = [];
  addHobbyBtn.addEventListener("click", () => {
    const hobby = hobbies.value;
    hobbiesArray.push(hobby);
    localStorage.setItem("hobbies", JSON.stringify(hobbiesArray));
    const hobbyItem = document.createElement("ul");
    hobbyItem.classList.add("hobby");
    hobbyItem.innerText = hobby;
    hobbiesRow.appendChild(hobbyItem);
    console.log(hobbiesArray);
  });
  table.appendChild(tableBody);
  studentsTable.appendChild(table);
};

const createStudentStats = (e) => {
  e.preventDefault();

  let hobbies = JSON.parse(localStorage.getItem("hobbies"));

  const studentStats = {
    firstName: firstName.value,
    lastName: lastName.value,
    age: age.value,
    school: school.value,
    birthDay: birthDay.value,
    hobbies: hobbies,
    address: {
      street: street.value,
      houseNumber: houseNumber.value,
      city: city.value,
      zipCode: zipCode.value,
    },
    comment: comment.value,
  };
  students.push(studentStats);
  renderStudents();
  savedStudentsLocalStrogae();
  form.reset();
};

renderStudents();
form.addEventListener("submit", createStudentStats);
