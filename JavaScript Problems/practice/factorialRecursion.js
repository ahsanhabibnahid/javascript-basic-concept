function factorial(number){
    if(number <=1 ){
        return 1;
    }
    else{
        return number * factorial(number-1)
    }
}

var number = factorial(5)
console.log(number)