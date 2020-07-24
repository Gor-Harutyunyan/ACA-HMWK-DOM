let input = document.querySelector(".input");
let result = document.querySelector(".result");

input.addEventListener("input", (event) => {
  let value = event.target.value;
  result.textContent = value;
});
