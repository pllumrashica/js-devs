const studentForm = document.getElementById("addS");
const studentTable = document.getElementById("studentTable");
localStorage.clear();

const loadStudents = () => {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.forEach((student, index) => {
    let tr = document.createElement("tr");
    studentTable.appendChild(tr);

    // Assign ID number to each user
    let id = document.createElement("td");
    id.innerHTML = index + 1;
    tr.appendChild(id);

    Object.values(student).forEach((value) => {
      let td = document.createElement("td");
      td.innerHTML = value;
      tr.appendChild(td);
    });

    let actionsBtn = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function () {
      tr.remove();
      students.splice(index, 1);
      localStorage.setItem("students", JSON.stringify(students));
    };
    actionsBtn.appendChild(deleteBtn);
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.onclick = function () {
      // document.getElementById("id").value = tr.cells[0].innerHTML;
      document.getElementById("name").value = tr.cells[1].innerHTML;
      document.getElementById("surname").value = tr.cells[2].innerHTML;
      document.getElementById("age").value = tr.cells[3].innerHTML;
      document.getElementById("gender").value = tr.cells[4].innerHTML;
      document.getElementById("birthDay").value = tr.cells[5].innerHTML;
      document.getElementById("group").value = tr.cells[6].innerHTML;

      studentButton.innerHTML = "Edit";
      // Remove the existing student data from localStorage
      students.splice(index, 1);
      localStorage.setItem("students", JSON.stringify(students));
    };
    actionsBtn.appendChild(editBtn);
    tr.appendChild(actionsBtn);
  });
};

window.addEventListener("load", () => {
  loadStudents();
});

const onStudentSubmit = (event) => {
  event.preventDefault();
  const formDataSecond = new FormData(document.getElementById("addS"));
  const formObjectSecond = {};
  formDataSecond.forEach(function (value, key) {
    formObjectSecond[key] = value;
  });

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(formObjectSecond);
  localStorage.setItem("students", JSON.stringify(students));

  location.reload(); // Reload the page to reflect the changes
};

studentForm.addEventListener("submit", onStudentSubmit);
