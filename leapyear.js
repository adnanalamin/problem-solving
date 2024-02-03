function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  }
}

// const lipi = isLeapYear(2052);
// console.log(lipi);

function isleapyear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const lear=isleapyear2(2052);
console.log(lear);
