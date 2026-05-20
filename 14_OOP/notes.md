# JavaScript and Classes

## OOP (Object-Oriented Programming)

Object-Oriented Programming is a programming paradigm that uses objects and classes to structure code in a way that models real-world entities and their relationships. It helps write more organized, maintainable, and reusable code.

## Object

An object is a collection of properties and methods that work together to represent a real-world entity or concept.

### Object Literal
```javascript
const user = {
    userName: 'Tariq',
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function() {
        console.log('Got User details from DB');
    }
};
```

### Accessing Object Properties
- Dot notation: `user.userName`
- Bracket notation: `user['userName']`

## Why Use OOP?

1. **Code Organization**: Group related data and functions together
2. **Reusability**: Create templates (classes/constructors) to generate multiple similar objects
3. **Maintainability**: Easier to update and debug code with clear structure
4. **Scalability**: Easier to extend and add new features
5. **Real-world Modeling**: Objects represent real-world entities naturally
6. **Encapsulation**: Hide internal implementation details and expose only necessary interfaces

## Parts of OOP

### 1. Object Literal
The simplest way to create an object by directly defining properties and methods.

### 2. Constructor Function
A function that creates and initializes objects. Use the `new` keyword to create instances.

```javascript
function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    this.greetings = function() {
        console.log(`Welcome ${this.userName}`);
    }
    
    return this; // not necessary, but can be explicit
}

const userOne = new User('Tariq', 12, true);
const userTwo = new User('Muhammad', 11, false);

console.log(userOne instanceof User); // true
```

**What happens with the `new` keyword:**
- A new object is created
- The newly created object gets linked to the prototype property of the constructor
- The constructor is called with `this` bound to the new object
- The new object is returned (if constructor doesn't return an object)

### 3. Prototypes
Prototypes allow you to add methods and properties that are shared among all instances, making them memory efficient.

```javascript
function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increment = function() {
    console.log(`${this.score++}`);
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
}

const tea = new createUser('tea', 60);
const coffee = new createUser('coffee', 400);

tea.printMe(); // Score is 60
coffee.increment(); // 400
```

**Note:** Functions have a `.prototype` property; objects accessed through the prototype chain.

### 4. Classes
Modern syntax for creating objects (introduced in ES6). Classes are syntactic sugar over constructor functions and prototypes.

```javascript
class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    
    encryptPass() {
        return `${this.password}abc`;
    }
    
    changeUserName() {
        return `${this.userName.toUpperCase()}`;
    }
}

const newUser = new User('Tariq', 'tariq@mail.com', '123');
console.log(newUser.encryptPass()); // 123abc
```

### 5. Instances (new, this)
- **`new` keyword**: Creates a new instance of a class or constructor function
- **`this` keyword**: Refers to the current object instance within methods and constructors

```javascript
console.log(userOne.constructor); // [Function: User]
console.log(userOne instanceof User); // true
```

## 4 Pillars of OOP

### 1. Abstraction
Hide internal implementation details and expose only the necessary interface.

```javascript
class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    
    // Only expose what's needed
    logIn() {
        console.log('Logging in...');
    }
}
```

### 2. Encapsulation
Wrapping up data (properties) and methods that operate on that data into a single unit (object/class). This protects data from unwanted external modification.

```javascript
class User {
    #password; // Private field
    
    constructor(email, password) {
        this.email = email;
        this.#password = password;
    }
}
```

### 3. Inheritance
A class can inherit properties and methods from a parent (base) class, promoting code reuse.

```javascript
class User {
    constructor(username) {
        this.username = username;
    }
    
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // Call parent constructor
        this.email = email;
        this.password = password;
    }
    
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const newTeacher = new Teacher('Tariq', 'tariq@mail.com', '123');
newTeacher.logMe(); // Inherited method from User
newTeacher.addCourse(); // Teacher-specific method

console.log(newTeacher instanceof Teacher); // true
console.log(newTeacher instanceof User); // true
```

### 4. Polymorphism
One function/method used in many ways. Same method name can have different implementations in different classes.

```javascript
class User {
    logMe() {
        console.log(`User logged in`);
    }
}

class Teacher extends User {
    logMe() {
        console.log(`Teacher logged in`);
    }
}

class Student extends User {
    logMe() {
        console.log(`Student logged in`);
    }
}

const user = new User();
const teacher = new Teacher();
const student = new Student();

user.logMe(); // User logged in
teacher.logMe(); // Teacher logged in
student.logMe(); // Student logged in
```

## Static Methods and Properties

Static methods and properties belong to the class itself, not to instances.

```javascript
class User {
    constructor(username) {
        this.username = username;
    }
    
    static createId() {
        return '123';
    }
}

const newUser = new User('Tariq');
// console.log(newUser.createId()); // Error: not accessible on instances

console.log(User.createId()); // '123' - accessed on the class itself
```

## Getters and Setters

Getters and setters provide controlled access to object properties.

```javascript
class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }
    
    // Getter
    get email() {
        return this._email.toUpperCase();
    }
    
    get password() {
        return this._password.toUpperCase();
    }
    
    // Setter
    set email(value) {
        this._email = value;
    }
    
    set password(value) {
        this._password = value;
    }
}

const newUser = new User('tariq@mail.com', 'abc');
console.log(newUser.password); // ABC
console.log(newUser.email); // TARIQ@MAIL.COM
```

**Important:** Use different names for getters/setters and the actual properties (e.g., `_password` vs `password`) to avoid infinite recursion.

## Prototypal Inheritance

Adding custom properties and methods to built-in prototypes (use with caution):

```javascript
Object.prototype.tariq = function() {
    console.log('Tariq is present in all objects');
}

Array.prototype.helloWorld = function() {
    console.log('Hello World!');
}

const myArray = [1, 2, 3];
myArray.helloWorld(); // Hello World!
```

## Setting Prototypes

### Old way (using `__proto__`)
```javascript
const User = { name: 'Tariq' };
const teacher = { makeVideo: true };

teacher.__proto__ = User;
```

### Modern way (using `Object.setPrototypeOf()`)
```javascript
Object.setPrototypeOf(teacher, User);
```