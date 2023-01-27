// const sub = document.querySelector("#subtract");
// const res = document.querySelector("#reset");
// const add = document.querySelector("#add");
const count = document.querySelector("#count");
const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  } else if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  } else if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "greenyellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "orange";
  } else {
    count.style.color = "white";
  }
}

// const subNumber = () => {
//   count.innerHTML--;
// };

// const resNumber = () => {
//   count.innerHTML = 0;
// };

// const addNumber = () => {
//   count.innerHTML++;
// };

// sub.addEventListener("click", subNumber);
// res.addEventListener("click", resNumber);
// add.addEventListener("click", addNumber);
