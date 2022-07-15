const allBtns = document.querySelectorAll(".btn");
const displayEquation = document.querySelector(".display-equation");
const displayNumber = document.querySelector(".display-number");
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".delete-btn");

let firstNum;
let currOperator;
let secondNum;
let secondSide;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(oper, a, b) {
  if (oper === "+") return add(a, b);
  if (oper === "-") return subtract(a, b);
  if (oper === "*") return multiply(a, b);
  if (oper === "/") return divide(a, b);
}

//Functionality for when a number is clicked
function handelInt(btn) {
  if (btn.classList.contains("btn-int")) {
    if (displayNumber.textContent === "0") displayNumber.textContent = "";
    if (currOperator) {
      if (!secondSide) displayNumber.textContent = "";
      displayNumber.textContent += btn.value;
      secondSide = true;
    } else {
      displayNumber.textContent += btn.value;
    }
  }
}

//Functionality for when an operator is clicked
function handelOperator(btn) {
  if (btn.classList.contains("btn-operator")) {
    firstNum = parseInt(displayNumber.textContent);
    currOperator = btn.value;
  }
}

//Functionality for when the equal sign button is clicked
function handelEqual(btn) {
  if (btn.classList.contains("btn-equal")) {
    secondNum = parseInt(displayNumber.textContent);
    displayNumber.textContent = operate(currOperator, firstNum, secondNum);
    displayEquation.textContent = `${firstNum ? firstNum : ""} ${
      currOperator ? currOperator : ""
    } ${secondNum ? secondNum : ""}`;
    // currOperator = "";
    // firstNum = null;
    // secondNum = null;
  }
}

//Listens for all btns clicked
allBtns.forEach(function (current) {
  current.addEventListener("click", function (e) {
    handelInt(current);
    handelOperator(current);
    handelEqual(current);
    displayEquation.textContent = `${firstNum ? firstNum : ""} ${
      currOperator ? currOperator : ""
    } ${secondNum ? secondNum : ""}`;
  });
});

//Listens for clear btn click
clearBtn.addEventListener("click", function () {
  displayNumber.textContent = "0";
  displayEquation.textContent = "";
  currOperator = "";
  firstNum = null;
  secondNum = null;
  secondSide = false;
});

//Listens for delete btn click
delBtn.addEventListener("click", function () {
  displayNumber.textContent = displayNumber.textContent.slice(0, -1);
});

//TODO
//Make Calculator Work With Decimals
//Display Equation On Top As Going
