const image = document.querySelector(".mySlides");
const leftBtn = document.querySelector(".lbtn");
const rigthBtn = document.querySelector(".rbtn");
const imagesLength = 5;
let num = 1;

setInterval(nextImg, 3000);
function nextImg() {
  num += 1;
  if (num > imagesLength) {
    num = 1;
  }
  image.setAttribute("src", `Images/img${num}.jpg`);
}

function prevImg() {
  num -= 1;
  if (num < 1) {
    num = imagesLength;
  }
  image.setAttribute("src", `Images/img${num}.jpg`);
}
rigthBtn.addEventListener("click", () => nextImg(num));
leftBtn.addEventListener("click", () => prevImg(num));
