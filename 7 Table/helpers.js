import { SORTING_ORDERS } from "./constants.js";

export const createTableRow = (items) => {
  const tr = document.createElement("tr");

  items.forEach((value) => {
    const td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  });

  return tr;
};

export const sortStudents = (students, order) => {
  if (order === SORTING_ORDERS.random) {
    return students;
  }
  return students.slice().sort((a, b) => {
    if (order === SORTING_ORDERS.asc) {
      return a.age > b.age ? 1 : -1;
    } else {
      return a.age > b.age ? -1 : 1;
    }
  });
};
