const products = [
  { name: "Shampoo", price: 300, quantity: 4 },
  { name: "Chirumi", price: 100, quantity: 3 },
  { name: "shirt", price: 1200, quantity: 3 },
  { name: "biskut", price: 400, quantity: 4 },
  { name: "harpic", price: 1300, quantity: 6 },
];

function shoopingCart(products) {
  let sum = 0;
  for (const product of products) {
    const productQuantity = product.price * product.quantity;
    sum += productQuantity;
  }
  return sum;
}

const total = shoopingCart(products);
console.log(total);
