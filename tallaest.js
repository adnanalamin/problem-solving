const height = [23,45,67,88,65,34,68,22,888];

function getMax(numbers){
    let max = numbers[0];
    for(let num of numbers){
        if(max < num){
            max = num;
        }
    }
    return max;
}

const max=getMax(height);
console.log(max);