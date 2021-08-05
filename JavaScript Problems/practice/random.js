function randomNumber(number){
    var randomNum = Math.random()*number;
    var dice = Math.round(randomNum);
    return dice;
}

var result = randomNumber(10000) // 10000 er modde random value dibe
console.log(result)