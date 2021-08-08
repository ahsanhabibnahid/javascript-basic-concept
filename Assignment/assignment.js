// Kilometer to meter

// function kilometerToMeter(km){
//     return km * 1000;
// }

// var result = kilometerToMeter(10)
// console.log(result)

// budget calculation

// function budgetCalculator(clock, mobile, laptop) {
//   var totalClockPrice = clock * 50;
//   var totalMobilePrice = mobile * 100;
//   var totalLaptopPrice = laptop * 500;
//   var totalBudget = totalClockPrice + totalMobilePrice + totalLaptopPrice;
//   return totalBudget;
// }

// var result = budgetCalculator(2, 2, 1);
// console.log(result);

// hotel cost calculation

// function hotelCost(day) {
//   cost = 0;
//   if (day >= 1 && day <= 10) {
//     var firstTenDaysCost = day * 100;
//     return firstTenDaysCost;
//   }
//   else if (day >= 11 && day <= 20) {
//     var firstTenDaysCost = 10 * 100;
//     var remainingDays = day - 10;
//     var secondTenDaysCost = remainingDays * 80;
//     return (firstTenDaysCost + secondTenDaysCost);
//   }
//   else if (day > 20) {
//     var firstTenDaysCost = 10 * 100;
//     var secondTenDaysCost = 10 * 80;
//     var remainingDays = day - 20;
//     var thirdTenDaysCost = remainingDays * 50;
//     return (firstTenDaysCost  + secondTenDaysCost + thirdTenDaysCost);
//   }
//   else{
//       return 'Invalid input';
//   }
// }

// var result = hotelCost(0);
// console.log(result);

// find largest name from an array list

function megaFriend(nameList){
    var large = [0]
    var largest;
    for(var i = 0; i <nameList.length; i++){
        if(nameList[i].length>large){
            large = nameList[i].length;
            largest = nameList[i]
        }
    }
    return largest;
}

var friendList = ['Shariful Islam', 'Tanzimul Haque Shimul', 'Zahid Ahmed aaaaaaaaaaaaa', 'Muslim Ahmed',];
var result = megaFriend(friendList)
console.log(result)



