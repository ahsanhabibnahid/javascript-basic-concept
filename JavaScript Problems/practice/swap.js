
function swap(a, b) {
    console.log('before swap ',a ,b)
  a = a + b; // a = 25
  b = a - b; // b = 10
  a = a - b; // a = 15
    return [a,b];

}

var numbers = swap(10,15)
console.log('after swap',numbers)

