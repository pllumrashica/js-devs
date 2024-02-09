let students = [
  {
    id: 0,
    firstName: "Pellumb",
    lastName: "Rashica",
    age: 19,
  },
  {
    id: 1,
    firstName: "Amar",
    lastName: "Mejzini",
    age: 18,
  },
];

document.write(
  `<table><th>ID</th><th>First Name</th> <th>Last Name</th> <th>Age</th>`
);

students.forEach((student) => {
  document.write(
    `
        <tbody>
            <tr>
            <td>${student.id}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
            </tr>
        </tbody>
        `
  );
});

document.write(`</table>`);

// Homework - transform text with strings method to uppercase and lowercase ,first product should have different bg.
// inside product should have array with catehgory 
