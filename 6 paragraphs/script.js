import isHex from "./helpers/isHex.js";

let paragraphs = document.querySelectorAll(".paragraph");
let colorInput = document.querySelector("#color");
let backColorInput = document.querySelector("#backColor");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  if (isHex(colorInput.value) && isHex(backColorInput.value)) {
    paragraphs.forEach((el) => {
      el.style.backgroundColor = `${backColorInput.value}`;
      el.style.color = `${colorInput.value}`;
    });
  }
});
