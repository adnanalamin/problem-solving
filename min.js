const lawest = [44,55,22,55,66,77,88,99,23,56,11,6];


function getMin(numbers){
    let min = numbers[0];
    for(let num of numbers){
        if(min > num){
            min = num;
        }
    }
    return min;
}

const min = getMin(lawest);
console.log(min);