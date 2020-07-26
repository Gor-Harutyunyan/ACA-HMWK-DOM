let button = document.querySelector("#btn");
console.log(button);

button.addEventListener("click", function () {
  button.nextSibling.innerText = "";
  let div = document.createElement("div");
  let date = new Date();
  div.append(date);
  div.style.marginLeft = "20px";
  button.insertAdjacentElement("afterend", div);
});
