function duplicateArray(numbers) {
  var emptyArray = [];
  for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i]
      var index = emptyArray.indexOf(number)
      if(index < 0){
        emptyArray.push(number)
      }
  }
  return emptyArray;
}

var input = [10, 5, 17, 15, 7, 5, 17, 12, 30];
var result = duplicateArray(input);
console.log(result);
