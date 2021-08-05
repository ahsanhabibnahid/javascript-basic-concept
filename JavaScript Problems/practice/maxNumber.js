function maxNumber(numbers) {
  var max = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (element > max) {
      max = element;
    }
  }
  return max;
}

var input = [10, 608, 35, 500];
var result = maxNumber(input);
console.log(result);
