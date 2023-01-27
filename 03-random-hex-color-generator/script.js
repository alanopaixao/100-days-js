const hexColor = document.querySelector("#hexColor");
const generate = document.querySelector("#generate");

const colorGenerator = () => {
  const colorGenerator = Math.random().toString(16).substring(2, 8);
  hexColor.innerHTML = "#" + colorGenerator;
  document.body.style.backgroundColor = hexColor.innerHTML;
};

generate.addEventListener("click", colorGenerator);
