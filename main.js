function genCoins(cents) {
var quarters;
var dimes;
var nickels;
var pennies;
quarters = Math.floor(cents / 25)
var remainder = cents%25
dimes = Math.floor(remainder/10)
remainder = remainder%10
nickels = Math.floor(remainder/5)
remainder = remainder%5
pennies = remainder

// console.log(`Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`);

var change = new Object;
change.pennies = pennies
change.nickels = nickels
change.dimes = dimes
change.quarters = quarters
return change
}
var whatever = genCoins(94)
console.log(whatever)
