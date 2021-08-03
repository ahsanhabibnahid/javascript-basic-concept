function stringReverse(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i]
        reverse = char + reverse;
    }
    return reverse;
}

var speech = "hello world";
var result = stringReverse(speech)
console.log(result)