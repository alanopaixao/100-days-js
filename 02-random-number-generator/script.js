const number = document.querySelector("#number");
const generate = document.querySelector("#generate");

function generateNumber() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
}

generate.addEventListener("click", generateNumber);
