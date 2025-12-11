/*
Stack vs Heap Memory

Primitive data types are stored in the stack memory, which is faster to access and manage. When a primitive value is assigned to a variable, the actual value is stored directly in that variable.

Reference (Non Premitive) data types are stored in the heap memory, which is used for dynamic memory allocation. When a reference type is assigned to a variable, the variable holds a reference (or pointer) to the location in heap memory where the actual object is stored.
*/

//Stack
let myName = "Tariq";

let userName = myName;
console.log("userName Before:", userName);

userName = "spikeNoob";

console.log("myName:",myName); //the actual value is still intact => "Tariq".
console.log("userName After:",userName);

//Heap
let userOne = {
    "name" : "Tariq",
    "mail" : "tariq@mail.com"
};

console.log("UserOne mail Before:",userOne.mail);

let userTwo = userOne;

userTwo.mail = "spike@mail.com"; 
/*
The exact reference was changed, resulting in changing the value lying on that reference.
*/

console.log("UserOne mail After:",userOne.mail);
console.log("UserTwo mail:",userTwo.mail);