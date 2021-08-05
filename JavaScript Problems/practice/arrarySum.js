function arraySum(numbers){
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

var input = [100,200,500,300,20]
var result = arraySum(input)
console.log(result)