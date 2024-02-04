function shooping(shirtQuantity, pantQuantity, shoeQuantity) {
  const perShirt = 500;
  const perPant = 300;
  const perShoe = 900;

  const totalShirt = perShirt * shirtQuantity;
  const totalPant = perPant * pantQuantity;
  const totalShoe = perShoe * shoeQuantity;

  const totalPrice = totalPant + totalShirt + totalShoe;

  return totalPrice;
}


const totalMoney = shooping(1,2,1);
console.log(totalMoney);
