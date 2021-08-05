function reverseString(str) {
  var char = "";
  for (var i = 0; i < str.length; i++) {
      var text = str[i];
      char = text + char;
  }
  return char;
}

var result = reverseString("alif");
console.log(result);
