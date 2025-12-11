const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString(16)); //64 Hexadecimal
console.log(balance.toString(10)); //100 Decimal
console.log(balance.toString(8)); //144 Octal
console.log(balance.toString(2)); //1100100 Binary


const num = 123.4556;
console.log(num.toPrecision(4)); //123.5 rounds off to the precision value

const currency = 10000000;
console.log(currency.toLocaleString('en-PK')); //10,000,000 to local Pakistani format


/*************************************MATH**************************************/
console.log(Math.abs(-10)); //10 absolute value
console.log(Math.round(5.5)); //6 
console.log(Math.sqrt(25)); //5
console.log(Math.ceil(5.3)); //6
console.log(Math.floor(5.3)); //5
console.log(Math.min(1,3,5,7,9)); //1
console.log(Math.max(1,3,5,7,9)); //9

console.log(Math.random()); //random value between 0 and 1
console.log((Math.random() * 10) + 1); //random value between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); //round of to the lowest

const min = 10;
const max = 20;

console.log(max - min + 1); //11
console.log(Math.random() * (max - min + 1)); //value between 1 and 10
console.log(Math.random() * (max - min + 1) + min); //value between 11 and 20
console.log(Math.floor((Math.random() * (max - min + 1) + min))); //round off value between 11 and 20 
