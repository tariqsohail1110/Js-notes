class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const newUser = new Teacher('Tariq', 'tariq@mail.com', '123');

newUser.addCourse();
// console.log(newUser.username);


const newUserTwo = new User('Muhammad');

newUserTwo.logMe();
newUser.logMe();

console.log(newUser === newUserTwo); // false

console.log(newUser === Teacher); // false

console.log(newUser instanceof Teacher); // true

console.log(newUser instanceof User); // true
