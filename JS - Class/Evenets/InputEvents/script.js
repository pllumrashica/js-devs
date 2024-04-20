let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let ageInput = document.getElementById("ageInput");
let birthInput = document.getElementById("birthInput");
let genderInput = document.querySelectorAll(
  "input[type='radio'][name='gender']"
);
let languageInput = document.querySelectorAll(
  "input[type='checkbox'][name='language']"
);

let firstNameHeading = document.getElementById("firstNameHeading");
let lastNameHeading = document.getElementById("lastNameHeading");
let ageHeading = document.getElementById("ageHeading");
let birthdayHeading = document.getElementById("birthdayHeading");
let genderHeading = document.getElementById("genderHeading");
let languageHeading = document.getElementById("languageHeading");
let languageSecondHeading = document.getElementById("languageSecondHeading");

const firstNameInputValue = (e) => {
  console.log(e.target.value);
  firstNameHeading.innerText = e.target.value;
};
const lastNameInputValue = (e) => {
  console.log(e.target.value);
  lastNameHeading.innerText = e.target.value;
};

const ageInputValue = (e) => {
  console.log(e.target.value);
  ageHeading.innerText = e.target.value;
};

const birthInputValue = (e) => {
  console.log(e.target.value);
  birthdayHeading.innerText = e.target.value;
};

genderInput.forEach((gender) => {
  gender.addEventListener("change", (e) => {
    console.log(e.target.value);
    genderHeading.innerText = e.target.value;
  });
});

languageInput.forEach((language) => {
  language.addEventListener("change", (e) => {
    console.log(e.target);
    if (e.target.value == "Albanian") {
      languageHeading.innerText = e.target.value;
    }
    if (e.target.value == "English") {
      languageSecondHeading.innerText = e.target.value;
    }
  });
});

firstNameInput.addEventListener("input", firstNameInputValue);
lastNameInput.addEventListener("input", lastNameInputValue);
ageInput.addEventListener("input", ageInputValue);
birthInput.addEventListener("input", birthInputValue);
