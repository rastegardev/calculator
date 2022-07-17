const displayNumber = document.querySelector(".display");
const keypadBtn = document.querySelectorAll(".show-display");

function showDisplay(event) {
  const x = event.target.innerText;
  if (displayNumber.innerText == 0) {
    return (displayNumber.innerText = x);
  }
  return (displayNumber.innerText += x);
}

function calculate() {
  let result = displayNumber.innerText;
  displayNumber.innerText = eval(result);
}

function allClear() {
  displayNumber.innerText = 0;
}

function clearLast() {
  let userSelect = displayNumber.innerText;
  if (userSelect.length == 1) {
    displayNumber.innerText = 0;
  } else {
    displayNumber.innerText = userSelect.substring(0, userSelect.length - 1);
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clearLast);

keypadBtn.forEach((item) => {
  item.addEventListener("click", showDisplay);
});