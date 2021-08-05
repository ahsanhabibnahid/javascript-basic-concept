function arraySum(numbers) {
	var sum = 0;

	for (i = 0; i < numbers.length; i++) {
		var sum = numbers[i] + sum;
	}
	return sum;
}

var numbers = [10, 20, 20];

var result = arraySum(numbers);

console.log(result);
