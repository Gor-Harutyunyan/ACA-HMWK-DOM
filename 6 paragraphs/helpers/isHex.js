let valid = document.querySelector(".valid");

function isHex(value) {
  let hex = /^#[0-9A-F]{6}$/i.test(value);
  if (hex) {
    return true;
  }
  valid.innerText = "Invalid Input";
}

export default isHex;
