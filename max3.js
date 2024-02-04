const jim = 859;
const tim = 700;
const kim = 90;

if (jim > tim && jim > kim) {
  console.log("Jim is the ultimate Boss");
} else if (tim > jim && tim > kim) {
  console.log("Tim is the Boss");
} else {
  console.log("Kim is the Marbelus");
}

function getmax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const result = getmax(745,607,89);
console.log(result);
