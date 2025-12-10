let score = "33"

let stringToNumber = Number(score)

console.log(typeof stringToNumber);
console.log(stringToNumber);

/*
"33" => 33 will be easily coverted
"33abc" => will return NaN (not a number, but the datatype will change to number)
*/

let isLoggedIn = true
let booleanToNumber = Number(isLoggedIn)
console.log(booleanToNumber);

let isNotLoggedOut = false
let boolToNumber = Number(isNotLoggedOut)
console.log(boolToNumber);
/*
true = 1, false = 0
"" => false
"Hello" => true
*/

let myNumber = 343
let numToString = String(myNumber)
console.log(typeof numToString);
console.log(numToString);

