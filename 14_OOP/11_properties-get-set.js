//Old school getter setter practice
//function based syntax

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    })
}

const newUser = new User('tariq@mail.com', 'abc');
console.log(newUser.email);  // same output as getters and setters
console.log(newUser.password);