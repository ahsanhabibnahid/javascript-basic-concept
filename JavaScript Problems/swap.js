// using temp variable
var firstValue = 10;
var secondValue = 15;

console.log('before swap = ', firstValue, secondValue)


var temp = firstValue;
firstValue = secondValue;
secondValue = temp;

console.log('after swap = ', firstValue, secondValue)


// using only two variable

var a = 10;
var b = 15;
console.log('before swap = ', a, b)
a = a + b   // a = 10+15 = 25
b = a - b   // b = 25-15 = 10
a = a - b   // a = 25-10 = 15

console.log('after swap = ', a, b)


// using javascript array

var p = 10;
var q= 15;

console.log('before swap = ', p, q)

var [p,q] = [q,p]

console.log('after swap = ', p, q)

