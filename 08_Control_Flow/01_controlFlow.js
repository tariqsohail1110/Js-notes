//if

if(true) { //if true the inner code will be executed, else not
    // internal code
}

//Examples

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log('Hello World')
}

/* Operators used in control flow
< (less than)
> (greater than)
<= (less than or equals to)
>= (greater than or equals to)
== (equals to)
=== (stirct equals too --> type check)
!= (not equals to)
!== (strict check)
*/

if (2 === 2) {
    console.log('executed');
} else {
    console.log('not executed');
} // if the code should be executed after if, so don't use else
console.log(`I'll always execute`);

const score = 200;

if (score > 100) {
    // var power = 'fly'; //var has global scope
    const power = 'fly';
    console.log(`The user can now ${power}`);
}
// console.log(`The user can now ${power}`);//Scope issue

const balance = 1000;

if (balance > 500) console.log('The balance is more than 500'); //implicit scope

if (balance > 800) console.log('The balance is more than 500'), console.log('The balance is more than 800'); //not a good practice, better use explicit scope

//Checking multiple conditions
if(balance < 500) {
    console.log('balance is less than 500');
}else if (balance < 700) {
    console.log('balance is less than 700');
}else if (balance < 900) {
    console.log('balance is less than 900');
} else {
    console.log('balance is less than 1200');
}


/////////////////////////////////////////////////////////

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) { //&& --> and operator
    console.log('You are eligible to buy');
}
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log('logged in successfully');
}