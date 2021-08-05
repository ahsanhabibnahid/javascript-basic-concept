function countString(str){
    var count = 0;
    for(var i = 0; i<str.length; i++){
        var text = str[i]
        if(text == ' '&& str[i-1] != ' '){
            count++
        }

    }
    count++
    return count;
}


var result = countString('hello world')
console.log(result)