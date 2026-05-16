// class User {
//     constructor(userName, email, password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPass() {
//         return `${this.password}abc`;
//     }

//     changeUserName() {
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const newUser = new User('Tariq', 'tariq@mail.com', '123');

// console.log(newUser.encryptPass());
// console.log(newUser.changeUserName());

// under the hood

function User (userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPass = function() {
    return `${this.password}abc`;
}

User.prototype.changeUserName = function() {
    return `${this.userName.toUpperCase()}`
}
const newUserTwo = new User('Muhammad', 'muhammad@mail.com', '456');

console.log(newUserTwo.encryptPass());
console.log(newUserTwo.changeUserName());