/*Primitive Data types in JS
There are 7 of them
String
Number
Boolean
null
undefined
Symbol (use to make unique objects)
BigInt

They are all Call By Value, which means when they are called the compiler makes their copy and then returns that copy
*/
const score = 100; //integer
const scoreValue = 100.3; //float

const isLoggedIn = true; //boolean
const temp = null; //object
let userEmail; //undefined

const Id = Symbol("123");
const anotherId = Symbol("123");

console.log(Id === anotherId);


let bigNumber = 3442331617777783n //n to declare a bigint variable


/*Reference (Non-Primitive) directly allocate the reference of these variables (aka Object Datatypes)
Array
Objects (Dictionaries in Python)
Functions
*/
const fruits = ["apple", "banana", "Mango"]; //Array

let user = {
    "name" : "tariq",
    "age" : 20
}; //Object

const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber); //bigint
/*
NOTE: JavaScript is a dynamically typed language. This means that you do not need to explicitly declare the data type of a variable, and the type of a variable can change during runtime based on the value it holds.
*/