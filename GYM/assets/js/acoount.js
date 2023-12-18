let nameInp = document.querySelector(".nameInp");
let surnameInp = document.querySelector(".surnameInp");
let ageInp = document.querySelector(".ageInp");
let emailInp = document.querySelector(".emailInp");
let form = document.getElementById("form");

const registerAccount = (event) => {
  event.preventDefault();
  axios.post("https://655c83c825b76d9884fd6f17.mockapi.io/basket", {
    name: nameInp.value,
    surname: surnameInp.value,
    age: ageInp.value,
    email: emailInp.value,
  });
};

form.addEventListener("submit", registerAccount);
