const userEmail = 'tariq@mail.com';

if(userEmail) { //over here the string is treated as a truthy value
    console.log('User email is present');
} else {
    console.log('No user email found');
} 

/* falsy values
- false
- 0
- -0 (negative 0)
- BigInt (0n)
- ""
- null
- undefined
- Nan (not a number)
*/

/* truthy values
- '0' (if 0  is in string then it is truthy)
- 'false'
- " " (space)
- []
- {}
- function(){} (empty function)
*/

const userArray = [];
if (userArray.length === 0) {
    console.log('Array is empty');
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log('Object is empty');
}


// Nullish Coalescing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10; //5
val1 = null ?? 10; //10
val1 = null ?? 10 ?? 20; //10
console.log(val1);


// Terniary Operator

// condtion ? true : false

const score = 400;

score > 300 ? console.log("it is greater") : console.log('it is lesser');