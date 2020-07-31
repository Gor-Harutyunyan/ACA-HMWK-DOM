import { SORTING_ORDERS } from "./constants.js";
import { createTableRow } from "./helpers.js";
import { sortStudents } from "./helpers.js";

const inputs = document.querySelectorAll(".input");
const submit = document.querySelector(".submit");
const table = document.querySelector(".sortable-table");
const tableBody = table.querySelector("tbody");
const p = document.querySelector(".warning");
const ageCol = document.querySelector(".sortable-table-age");

const state = {
  students: [
    {
      name: "Gor",
      grade: 9,
      age: 25,
    },
    {
      name: "Arman",
      grade: 9.5,
      age: 23,
    },
    {
      name: "David",
      grade: 8.5,
      age: 26,
    },
    {
      name: "Aram",
      grade: 8.7,
      age: 24,
    },
  ],
  order: SORTING_ORDERS.random, // asc = &#11014, desc = &#11015
};

const render = (state) => {
  tableBody.innerHTML = "";

  state.students.forEach(({ name, age, grade }) => {
    const row = createTableRow([name, grade, age]);

    tableBody.appendChild(row);
  });

  const sortIcon = ageCol.querySelector(".sort-icon");

  switch (state.order) {
    case SORTING_ORDERS.random:
      sortIcon.innerHTML = "&#10145";
      break;
    case SORTING_ORDERS.asc:
      sortIcon.innerHTML = "&#11014";
      break;
    case SORTING_ORDERS.desc:
      sortIcon.innerHTML = "&#11015";
      break;
    default:
      throw new Error(`${state.order} is not valid sorting command`);
  }
};

render(state);

ageCol.addEventListener("click", (evt) => {
  switch (state.order) {
    case SORTING_ORDERS.random:
      state.order = SORTING_ORDERS.asc;
      break;
    case SORTING_ORDERS.asc:
      state.order = SORTING_ORDERS.desc;
      break;
    case SORTING_ORDERS.desc:
      state.order = SORTING_ORDERS.random;
      break;
    default:
      throw new Error(`${state.order} is not valid sorting command`);
  }

  state.students = sortStudents(state.students, state.order);
  render(state);
});
