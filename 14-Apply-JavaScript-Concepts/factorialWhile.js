

function factorialWhile(n){
    var factMul = 1;
    var i=1;
    while(i<=n){
        factMul = factMul*i;
        i++;
    }
    return factMul;
}

var result = factorialWhile(5)
console.log(result)