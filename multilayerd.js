function totalPrice(product) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (product <= 100) {
    const total = product * first100Price;
    return total;
  } else if (product <= 200) {
    const frist = 100 * first100Price;
    const second = product - 100;
    const third = second * second100Price;
    const total = frist + third;
    return total;
  } else {
    const frist = 100 * first100Price;
    const third = 100 * second100Price;
    const fourth = product - 200;
    const fifth = fourth * above200Price;
    const total = frist + third + fifth;
    return total;
  }
}

const total = totalPrice(201);
console.log(total);
