const students = [
  {
    id: "studentsId1",
    firstName: "Omer",
    lastName: "Mulliqi",
    averageGrade: 4.5,
  },
  {
    id: "studentsId2",
    firstName: "Amar",
    lastName: "Mulliqi",
    averageGrade: 2.5,
  },
  {
    id: "studentsId3",
    firstName: "Alaudin",
    lastName: "Mulliqi",
    averageGrade: 3.5,
  },
  {
    id: "studentsId4",
    firstName: "Pllumi",
    lastName: "Mulliqi",
    averageGrade: 1.5,
  },
];

// let filterAray = students.filter((student) => student.firstName == 'Omer');
let filterAray = students.filter((student) => student.averageGrade > 3.5);
console.log(filterAray);
