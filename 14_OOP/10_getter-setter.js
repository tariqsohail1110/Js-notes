class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() { //name will be the same for as the property
        return this._email.toUpperCase();
    }
    get password() {
        return this._password.toUpperCase();
    }

    // set password(value) {
    //     this.password = value;
    //     /*
    //     it will give range error, maximum call stack size exceeded as the constructor and setter
    //     both are trying to set the value
    //     */
    // }

    set password(value) {
        this._password = value; //now this gives the same issue as set, with get, so also use ._password in get too
    }

    set email(value) { //one parameter required
        this._email = value;
    }
}

const newUser = new User('tariq@mail.com', 'abc');
console.log(newUser.password);
console.log(newUser.email);
