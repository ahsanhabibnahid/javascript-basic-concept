var marks = [50,33,87,19,65,35,98,200,79,99,78,100]

var max = marks[0]

for(var i = 0; i < marks.length; i++){
    var element = marks[i]
    if(element > max){
        max = element;
    }
}
console.log(max)