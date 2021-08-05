function checkPrime(n){
    for(var i = 2; i< n; i++){
        if(n % i == 0){
            return 'not a prime number';
        }
    }
    return 'its a prime number';
}

var result = checkPrime(11)
console.log(result)