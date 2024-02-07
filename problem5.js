function monthlySavings(arr , livingCost) {
    let sum = 0;
    for(let arrays of arr){
        if(arrays >= 3000){
            const dd=arrays-arrays*25/100;
            
        }
        sum += arrays-dd;
        
        
    }
    console.log(sum);
}

const savings = [ 1000 , 2000 , 3000 ] 
const livingC =5000;

const result = monthlySavings(savings,livingC);
console.log(result);