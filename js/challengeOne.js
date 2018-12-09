"use strict"
var calculateInterest = function (startAmount, years, ratePercent) {
    var interestRate = ((ratePercent/100) + 1);
    return (startAmount * Math.pow(interestRate, years).toFixed(0));
}
var division = function (){
    
}

var twoYears = calculateInterest(2000, 13, 2);
var threeYears = calculateInterest(2000, 13, 3);
var fourYears = calculateInterest(2000, 13, 4);

console.log(Math.sqrt(twoYears).toFixed(0));
console.log(threeYears);
console.log(fourYears);