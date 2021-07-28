
function largestNumber(numbers){
    var larger = numbers[0];
    for(var i= 0; i<numbers.length; i++){
        var result = numbers[i]
        if(result > larger){
            larger = result
        }
    }
    return larger;
}


var numberArray = largestNumber([20,35,12,78,63,17,98])
console.log(numberArray)