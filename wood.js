function woodPrice(chair, table, bed) {
  const chairPrice = 3;
  const tablePrice = 15;
  const bedPrice = 50;

  const chairQuantity = chairPrice * chair;
  const tableQuantity = tablePrice * table;
  const bedQuantity = bedPrice * bed;

  const totalWood = chairQuantity + tableQuantity + bedQuantity;

  return totalWood;
}

const total = woodPrice(3,0,5);
console.log(total);
