let employes = [
  {
    id: 1,
    firstName: "Omer",
    lastName: "Mulliqi",
    age: 16,
    department: "Art",
  },
  {
    id: 2,
    firstName: "Amar",
    lastName: "Mejzini",
    age: 18,
    department: "CELT",
  },
  {
    id: 3,
    firstName: "Pllum",
    lastName: "Rashica",
    age: 19,
    department: "Driver",
  },
  {
    id: 4,
    firstName: "Alaudin",
    lastName: "Haradinaj",
    age: 15,
    department: "Driver",
  },
];
document.write(`
<table>
<tr>
<th>id</th>
<th>firstName</th>
<th>lastName</th>
<th>age</th>
<th>department</th>
</tr>
`);

employes.forEach((employe) => {
  document.write(`
   <tr>
            <td>${employe.id}</td>
            <td>${employe.firstName}</td>
            <td>${employe.lastName}</td>
            <td>${employe.age}</td>
            <td>${employe.department}</td>
        </tr>
   `);  
});

document.write(`
</table>   
`);

document.write(`
<table>
<tr>
<th>id</th>
<th>firstName</th>
<th>lastName</th>
<th>age</th>
<th>department</th>
</tr>
`);

let employesFilter = employes.filter(
  (employes) => employes.department == "Driver"
);

employesFilter.forEach((employes) => {
  document.write(`
   <tr>
            <td>${employes.id}</td>
            <td>${employes.firstName}</td>
            <td>${employes.lastName}</td>
            <td>${employes.age}</td>
            <td>${employes.department}</td>
        </tr>
   `);
});

document.write(`
</table>   
`);
