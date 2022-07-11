let displayBox = document.querySelector(".display");
let listBtn = document.querySelectorAll(".show-display");

function showDisplay(event) {
  const x = event.target.innerText;
  if (displayBox.innerText == 0) {
    return (displayBox.innerText = x);
  }
  return (displayBox.innerHTML += x);
}

function calculate() {
  let result = displayBox.innerText;
  displayBox.innerText = eval(result);
}

function allClear() {
  displayBox.innerText = 0;
}

function clearLast() {
  let userNumber = displayBox.innerText;
  if (userNumber.length == 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = userNumber.substring(0, userNumber.length - 1);
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clearLast);
listBtn.forEach((item) => {
  item.addEventListener("click", showDisplay);
});