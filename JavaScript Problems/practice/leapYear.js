function leapYear(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		console.log('Its a Leap Year');
	} else {
		console.log('Its not a Leap Year');
	}
}

leapYear(2020);
