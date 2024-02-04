const phones = [
    {name:'Samsang',price:30000,camera:'12mp',color:'Black'},
    {name:'Xaomi',price:32000,camera:'12mp',color:'Black'},
    {name:'Iphone',price:100000,camera:'12mp',color:'Black'},
    {name:'Oppo',price:12000,camera:'12mp',color:'Black'},
    {name:'walton',price:35000,camera:'12mp',color:'Black'},
    {name:'KTC',price:8000,camera:'12mp',color:'Black'}
]


function getCheapstPhone(phones){

    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheapest = getCheapstPhone(phones);
console.log(cheapest);