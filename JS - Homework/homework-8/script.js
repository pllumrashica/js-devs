let employers = [
  {
    id: 0,
    firstName: "Pellumb",
    lastName: "Rashica",
    age: 19,
    jobTitle: "Full-Stack Developer",
    personalNumber: 100200300,
    absence: 5,
    weeklyHours: 43, // 48hours
  },
  {
    id: 1,
    firstName: "Amar",
    lastName: "Mejzini",
    age: 18,
    jobTitle: "Back-End Developer",
    personalNumber: 100200400,
    absence: 28,
    weeklyHours: 20, // 48hours
  },
  {
    id: 2,
    firstName: "Egzon",
    lastName: "Uka",
    age: 31,
    jobTitle: "Team-Lead",
    personalNumber: 100200500,
    absence: 0,
    weeklyHours: 52, // 48hours
  },
  {
    id: 3,
    firstName: "Pellumb",
    lastName: "Sadiku",
    age: 18,
    jobTitle: "Back-End Developer",
    personalNumber: 100200600,
    absence: 25,
    weeklyHours: 23, // 48hours
  },
];

document.write(`<table>`);
document.write(`<thead>
<th>Emri i Puntorit</th>
<th>Mosha</th>
<th>Titulli i Punes</th>
<th>Nr. Personal</th>
<th>Oret Javore</th>
<th>Oret Munges</th>
</thead>`);
for (let i = 0; i < employers.length; i++) {
  let rowColor = "";
  if (employers[i].absence > 24) {
    rowColor = "red";
  } else if (employers[i].weeklyHours > 48) {
    rowColor = "green";
  }
  let bgColorStyle = rowColor
    ? `background-color:${rowColor};color:white;`
    : "";

  let weeklyHoursContent = employers[i].weeklyHours;
  if (rowColor === "green") {
    weeklyHoursContent += " bonus extra";
  }

  document.write(`<tr style='${bgColorStyle}'>
  <td>${employers[i].firstName} ${employers[i].lastName}</td>
  <td>${employers[i].age}</td>
  <td>${employers[i].jobTitle}</td>
  <td>${employers[i].personalNumber}</td>
  <td>${weeklyHoursContent}</td>
  <td>${employers[i].absence}</td>
  </tr>`);
}
document.write(`</table>`);
