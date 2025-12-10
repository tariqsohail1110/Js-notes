let postivieValue = 3
let negativeValue = -postivieValue

// console.log(negativeValue);

/*
2 ** 3 => 2^3
2 % 3 => remainder
*/

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2

console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true); //1
console.log(+""); //0 as "" => false and + converts it to number (0 as false => 0)

let counter = 100
++counter
console.log(counter); //101


//example
let x = 3;
const y = x++; 
/*
firstly assign the value of x to y, then increment x
*/
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
/*
firstly increment x, then assign the value of x to y
*/
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"