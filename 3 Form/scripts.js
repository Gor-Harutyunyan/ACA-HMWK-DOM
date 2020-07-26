let form = document.querySelector(".form");
let button = document.querySelector(".button button");
let data = {};

form.addEventListener("input", (event) => {
  let value = event.target.value;
  data[event.target.name] = value;
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  alert(JSON.stringify(data));
});
