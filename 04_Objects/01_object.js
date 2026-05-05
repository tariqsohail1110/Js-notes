//Singleton -> through constructor
// Object.create

//Object literal
const mySym = Symbol('Key1'); //How to initialize a symbol in an object, cant do it like this
// mysym: 'key1' --> Wrong syntax
//intead we use [] --> [mysym]: 'key1'

const User = {
    name: 'Tariq',
    'full name': 'Muhammad Tariq',
    age: 22,
    location: 'Karachi',
    email: 'tariq@mail.com',
    isLoggedIn: false,
    [mySym]: 'key1',
    lastloggedInDays: ['Saturday', 'Sunday']
};

//way one to access
console.log(User.email);
// console.log(User.full name); --> full name can't be accessed like this now as there's space in it but

//other way (Sqaure Notation)
console.log(User['email']); //quotaation marks are necessary
console.log(User["full name"]); //This can access it
console.log(User[mySym]); //no quotations required for symbols

//Changing the values
User.email = 'tariq@yahoo.com';
console.log(User['email']);

//to make the object immutable we use freeze
// Object.freeze(User) //--> Now it's immutable
// User.name = 'Ahmed';
// console.log(User['name']); //prints Tariq (the original name)

console.log(User);
/*
{
  name: 'Tariq',
  'full name': 'Muhammad Tariq',
  age: 22,
  location: 'Karachi',
  email: 'tariq@yahoo.com',
  isLoggedIn: false,
  lastloggedInDays: [ 'Saturday', 'Sunday' ],
  Symbol(Key1): 'key1'
}
*/

//using functions
User.greeting = function() {
    console.log(`Hello ${this["full name"]}!`);
}

console.log(User.greeting());