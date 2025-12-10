console.log(2 > 1); //greater than
console.log(2 >= 1); //greater than or equal to
console.log(2 < 1); //less than
console.log(2 == 1); //equal to
console.log(2 != 1); //not equal to
console.log(2 === 2); //strict equal to


console.log("2" > 1); //will automatically convert string to number
console.log("02" > 1); //this will too

//avoid using the  following
console.log(nul > 0);
console.log(nul == 0);
console.log(nul >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//strict equality operator
console.log(2 === "2"); //false, because datatype is different
console.log(2 !== "2"); //true, because datatype is different

//loose equality operator
console.log(2 == "2"); //true, because value is same after type conversion
console.log(2 != "2"); //false, because value is same after type conversion