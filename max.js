const salman = 560;
const asha = 89;

if(salman > asha){
    console.log("Salman is the king");
}else{
    console.log('Asha is the boss');
}


function getMax(num1,num2){
    if(num1>num2){
        return num1;
    }
    return num2;
}

const max = getMax(23,33);
console.log('Find the max Number : ', max);