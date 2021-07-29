function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var result = inchToFeet(50);
result = result.toFixed(3)
console.log(result)