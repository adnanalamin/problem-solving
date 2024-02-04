const products = [
  { name: "Shampoo", price: 300, quantity: 3 },
  { name: "Chirumi", price: 100, quantity: 2 },
  { name: "shirt", price: 1200, quantity: 3 },
  { name: "biskut", price: 400, quantity: 4 },
  { name: "harpic", price: 1300, quantity: 6 },
];


function productsPrice(products){
    let sum = 0;
    for(const product of products){
        sum += product.price;
    }
    return sum;
}

const total = productsPrice(products);
console.log('Total price: ',total);
