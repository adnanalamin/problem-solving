function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function claculate(a, b, operator) {
  if (operator === "add") {
    const result = add(a, b);
    return result;
  } else if (operator === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operator === "multiply") {
    const result = multiply(a, b);
    return result;
  } else if (operator === "divide") {
    const result = divide(a, b);
    return result;
  } else {
    return "only 'add','subtract','multiply','divide' are allwod";
  }
}

const total = claculate(15, 5, "subtract");
console.log(total);
