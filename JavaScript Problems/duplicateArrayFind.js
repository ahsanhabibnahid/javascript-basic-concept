function findDuplicateArray(numbers){
    var uniqueArray = []
    for(var i=0; i<numbers.length; i++){
        var element = numbers[i]
        var index = uniqueArray.indexOf(element)
        if(index == -1){
            uniqueArray.push(element)
        }
    }
    return uniqueArray;
}

var numbers = [10,20,30,20,5,10,7,8,7,12]

var result = findDuplicateArray(numbers)

console.log(result)