function mulByFive(num) {
    return num * 5;
}

mulByFive.power = 2;

console.log(mulByFive(5)); // 25
console.log(mulByFive.power); // 2
console.log(mulByFive.prototype); // {} (this {context} of this method)

// Object's prototype is usually null

function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function () {
    console.log(`${this.score++}`);
}
createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
    
}

// const tea = createUser('tea', 60);
// const coffee = createUser('coffee', 400);

// tea.printMe(); //but there's a problem => TypeError: Cannot read properties of undefined (reading 'printMe')

const tea =  new createUser('tea', 60);
const coffee = new createUser('coffee', 400);

coffee.increment();
tea.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/