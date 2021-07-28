var number = 101;

if(number < 33){
    console.log('Fail')
}
else if(number >= 33 && number <50){
    console.log('Grade = B');
}
else if(number >=50 && number < 70){
    console.log('Grade = B+');
}
else if(number >=70 && number < 80 ){
    console.log('Grade = A'); 
}
else if(number >=80 && number < 101){
    console.log('Grade = A+'); 
}
else{
    console.log('invalid number');
}