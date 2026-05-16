class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const newUser = new User('Tariq');

// console.log(newUser.createId()); // not accessable

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}


const newTeacher = new Teacher('Muhammad', 'm@mail.com');

newTeacher.logMe();
console.log(newTeacher.createId()); // not accessable
