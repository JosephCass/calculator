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
  if (oper === "+") add(a, b);
  if (oper === "-") subtract(a, b);
  if (oper === "*") multiply(a, b);
  if (oper === "/") divide(a, b);
}
