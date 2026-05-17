//Object based syntax

const User = {
    _email: 'tariq@mail.com',
    _password: 'abc',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const anotherUser = Object.create(User);
console.log(anotherUser.email);
