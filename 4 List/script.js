const listItems = document.querySelectorAll(".list-item");
const list = document.querySelector(".list");
console.log(list);

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.toggle("hover");
  });
  item.addEventListener("mouseout", () => {
    item.classList.toggle("hover");
  });

  item.addEventListener("click", () => {
    if (item.previousElementSibling === null) {
      if (!item.nextElementSibling.classList.contains("done")) {
        item.classList.toggle("done");
      }
    } else if (item.previousElementSibling.classList.contains("done")) {
      if (item.nextElementSibling === null) {
        item.classList.toggle("done");
      } else if (!item.nextElementSibling.classList.contains("done")) {
        item.classList.toggle("done");
      }
    }
  });
});
