// program to check leap year exmple 1

function checkLearYear(year){
    if( year%4 == 0 && year%100 !=0 || year%400 == 0){
        return true;
    }
    else{
        return false;
    }
}


 checkLearYear(2000)


// program to check leap year exmple 2
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(1700);