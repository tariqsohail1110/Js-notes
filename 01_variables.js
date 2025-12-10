const accoundId = 343 //used for constants
let accountName = "Tariq" //for variables
var accountPassword = "12345" //also for variables but obselete due to block and function scope issues HOISTING
accountCity = "Karachi" //acceptable, but not recommended
let accountState; //undefined


accountName = "Ali" //changed
accountPassword = "212121" //change
accountCity = "Lahore" //changed
console.table([accoundId, accountName, accountPassword, accountCity, accountState])
/*
A multi line comment in JS
NOTE: semicolons are optional in JS
*/

//Hoisting example
console.log(hoistedVar); //undefined due to hoisting
var hoistedVar = "I am hoisted" 