let container = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
      let div = document.createElement("div");
      div.innerHTML = user.name;

      let div2 = document.createElement("div");
      div2.innerHTML = `Email: ${user.email} <br> Phone: ${user.phone} <br> Website: ${user.website}`;
      container.appendChild(div);
      container.appendChild(div2);
    });
  });
